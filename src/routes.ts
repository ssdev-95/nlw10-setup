import { FastifyInstance } from 'fastify'
import { Habit } from './models/habit'
import { DayHabit } from './models/day-habit'

async function AppRoutes(fastify:FastifyInstance) {
	fastify.get('/hello', async () => {
		return await Habit.findAndCountAll({
			include: DayHabit
		})
	})
}

export { AppRoutes }
