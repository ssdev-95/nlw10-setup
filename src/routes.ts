import { FastifyInstance } from 'fastify'

import {
	createHabitController
} from './controllers/create-habit.controller'

import {
	getDaysByDateController
} from './controllers/get-days-by-date.controller'

import {
	getSummaryController
} from './controllers/get-habit-summary.controller'

import {
	updateHabitStatusController
} from './controllers/update-habit-status.controller'

async function AppRoutes(fastify:FastifyInstance) {
	fastify.post('/habits', createHabitController)
	
	fastify.get('/days', getDaysByDateController)
	
	fastify.patch(
		'/habits/:id/toogle',
		updateHabitStatusController
	)

	fastify.get(
		'/summary',
		getSummaryController
	)
}

export { AppRoutes }
