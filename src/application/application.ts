import Fastify from 'fastify'
import cors from '@fastify/cors'

import { ServerRoutes } from '@infra/routes'

const fastify = Fastify()
fastify.register(cors)
fastify.register(ServerRoutes)

export { fastify }
