import { FastifyRequest as Request } from 'fastify'
import dayjs from 'dayjs'

import { z } from 'zod'
import { Op } from 'sequelize'

import { Day } from '../database/models/day'
import { Habit } from '../database/models/habit'
import { DayHabit } from '../database/models/day-habit'
import { HabitWeekDays } from '../database/models/habit-week-days'

async function getDaysByDateController(req:Request) {
	const getDaysBody = z.object({
		date: z.coerce.date()
	})

	try {
		const { date } = getDaysBody.parse(req.query)
		
		const parsedDate = dayjs(date)
		const weekDay = parsedDate.get('day')
		
		const habits = await Habit.findAll({
			where: {
				createdAt: {
					[Op.lte]: date,
				}
			},
			include: [{
				model: HabitWeekDays,
				as: 'weekDays',
				where: { weekDay }
			}, {
				model: DayHabit,
				as: 'dayHabits'
			}]
		})
		
		const day = await Day
		  .findOne({
				where: { 
					date: parsedDate.startOf('day').toDate()
				},
				include: [{
					model: DayHabit,
					as: 'dayHabits',
					attributes: ['id']
				}]
			})

	 const availableHabits = habits?.map(habit => ({
		 id: habit.id,
		 title: habit.title,
		 createdAt: habit.createdAt
	 }))

	 const completedHabits = !!day ? day.dayHabits : []
	
		return { availableHabits, completedHabits }
	} catch (error) {
		throw error
	}
}

export { getDaysByDateController }
