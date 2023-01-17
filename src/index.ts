import 'dotenv/config'
import './infra/typeorm/data-source'

import typeormPlugin from 'typeorm-fastify-plugin'

import Fastify from 'fastify'

import cors from '@fastify/cors'
import { Habit } from './infra/typeorm/entity/Habit'

const PORT = process.env.PORT
const port = PORT ? parseInt(PORT) : 4000

const fastify = Fastify()
fastify.register(cors)

fastify.register(typeormPlugin, {
	type: 'better-sqlite3',
	database: __dirname + '/infra/typeorm/db/db.sqlite',
	entities: [Habit]
})

fastify.listen({ port }).then(() => console.info(`[LOG] Server is running. (Port ${port})`))

export { fastify }
