import fastify from 'fastify'
import { AppRoutes } from './routes'
import { dbConnect } from './database.connect'

async function bootstrap() {
	const app = fastify()
	
	app.register(AppRoutes)
	app.register(dbConnect)
	//await dbConnect()

	app.listen(
		{ port:2077 },
		() => console.log('[INFO] Server is running')
	)
}

export { bootstrap }
