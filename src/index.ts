import 'dotenv/config'
import { fastify } from '@application/application'

const PORT = process.env.PORT
const port = PORT ? parseInt(PORT) : 4000

fastify
  .listen({ port })
	.then(() => console.info(`[LOG] Server is running. (Port ${port})`))
