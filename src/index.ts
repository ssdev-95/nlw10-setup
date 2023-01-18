import 'dotenv/config'
import './infra/typeorm/data-source'

import Fastify from 'fastify'
import cors from '@fastify/cors'

import { serverRoutes } from './routes'

const PORT = process.env.PORT
const port = PORT ? parseInt(PORT) : 4000

const fastify = Fastify()
fastify.register(cors)
fastify.register(serverRoutes)

fastify
  .listen({ port })
	.then(() => console.info(`[LOG] Server is running. (Port ${port})`))
