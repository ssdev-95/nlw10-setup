import { FastifyInstance } from 'fastify'

async function ServerRoutes(fastify:FastifyInstance) {
	fastify.get('/hello', () => {
		return { msg: 'Hello NLW.'}
	})
}

export { ServerRoutes }
