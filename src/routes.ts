import { FastifyInstance } from 'fastify'

export async function serverRoutes(
	fastify:FastifyInstance
) {
	fastify.get('/hello', () => {
		return { msg: 'Hello NLW.'}
	})

	//fastify.post('/habits', async (request) => {})
}
