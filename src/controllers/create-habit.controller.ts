import { FastifyRequest as Request } from 'fastify'
import { z } from 'zod'
import daysjs from 'dayjs'

import { Habit } from '../database/models/habit'

import {
	HabitWeekDays
} from '../database/models/habit-week-days'

async function createHabitController(req:Request) {
	const createHabitBody = z.object({
		title: z.string(),
		weekDays: z.array(z.number().min(0).max(6))
	})

	try {
		const { title, weekDays } = createHabitBody
			.parse(req.body)

		const habit = await Habit.create({
		  title,
	    createdAt: daysjs().startOf('day').toDate()
		})

		await HabitWeekDays
	    .bulkCreate(weekDays.map((weekDay) => {
		  	return {
			  	weekDay,
					habitId: habit.id
				}
			}))

		return { success:true }
	} catch (error) {

  	console.error(`[ERROR] ${error}`)
	  return { success:false }
	}
}

export { createHabitController }
