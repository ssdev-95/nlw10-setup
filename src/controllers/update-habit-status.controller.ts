import { FastifyRequest as Request } from 'fastify'
import { z } from 'zod'
import { Op } from 'sequelize'
import dayjs from 'dayjs'

import { Day } from '../database/models/day'
import { DayHabit } from '../database/models/day-habit'

async function updateHabitStatusController(
	req:Request
) {
	const updateParams = z.object({
		id: z.string().uuid()
	})

	const { id } = updateParams.parse(req.params)
	const today = dayjs().startOf('day').toDate()

	let day = await Day.findOne({
		where: { id }
	})

	if(!day) {
		day = await Day.create({
			date: today
		})
	}

	let dayHabit = await DayHabit.findOne({
		where: {
			[Op.and]: [
				{ dayId: day.id },
				{ habitId: id }
			]
		}
	})

	if(dayHabit) {
		await DayHabit.destroy({
			where: { id: dayHabit.id }
		})
	} else {
		dayHabit = await DayHabit.create({
			habitId: id,
			dayId: day.id
		})
	}
}

export { updateHabitStatusController }
