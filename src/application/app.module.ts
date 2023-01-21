import { Module } from '@nestjs/common'
import { AppController } from '@infra/app.controller'

import { AppService } from './app.service'
import { DatabaseModule } from '@infra/database.module'
import { TypeormService } from '@infra/database.service'

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService, TypeormService]
})
export class AppModule {}
