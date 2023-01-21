import { Injectable } from '@nestjs/common'

import { TypeormService } from '@infra/database.service'
import { Habit } from '@infra/database/entity/habit'

@Injectable()
export class AppService {
  constructor(private service: TypeormService) {}
  getHello(): Promise<number> {
    return this.service.getRepository(Habit).count()
  }
}
