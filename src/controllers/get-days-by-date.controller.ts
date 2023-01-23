import { FastifyRequest as Request } from 'fastify'
import { z } from 'zod'
import { Op } from 'sequelize'
import dayjs from 'dayjs'

import { Day } from '../database/models/day'
import { Habit } from '../database/models/habit'
import { DayHabit } from '../database/models/day-habit'

import {
	HabitWeekDays
} from '../database/models/habit-week-days'

async function getDaysByDateController(req:Request) {
	const getDaysBody = z.object({
		date: z.coerce.date()
	})

	try {
		const { date } = getDaysBody.parse(req.query)
		
		const parsedDate = dayjs(date)
		const weekDay = parsedDate.get('day')
		
		const habits = await Habit.findAll({
			attributes: ['id', 'title', 'createdAt'],
			where: {
				createdAt: {
					[Op.lte]: date,
				}
			},
			include: [{
				model: HabitWeekDays,
				as: 'weekDays',
				where: { weekDay: { [Op.eq]: weekDay } }
			}]
		})

		const day = await Day.findOne({
			where: {
				date: parsedDate.toDate()
			},
			include: [{
				model: DayHabit,
				as: 'dayHabits',
				attributes: ['id']
			}]
		})

		const availableHabits = habits
		  .map(({ id, title, createdAt }) => {
				return { id, title, createdAt }
			})

		return {
			availableHabits,
			day
		}
	} catch (error) {
		throw error
	}
}

export { getDaysByDateController }
