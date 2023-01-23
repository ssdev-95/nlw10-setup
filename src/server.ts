import fastify from 'fastify'
import cors from '@fastify/cors'

import { AppRoutes } from './routes'
import { dbConnect } from './lib/sequelize'

async function bootstrap() {
	const app = fastify()
	
	app.register(AppRoutes)
	app.register(cors)
	app.register(dbConnect)

	app.listen(
		{ port:2077 },
		() => console.log('[INFO] Server is running')
	)
}

export { bootstrap }
