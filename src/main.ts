import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { json } from 'express'

import { AppModule } from '@application/app.module'

async function bootstrap() {
  const PORT = process.env['PORT'] ?? 2077
  const app = await NestFactory.create(AppModule, {
    cors: { origin: '*' }
  })

  app.useGlobalPipes(new ValidationPipe())
  app.use(json({ limit: '50mb' }))

  await app.listen(PORT)
}

bootstrap()
