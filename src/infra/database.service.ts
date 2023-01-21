import { Injectable } from '@nestjs/common'
import { EntityTarget, ObjectLiteral } from 'typeorm'

import { AppDataSource } from './database/data-source'

@Injectable()
export class TypeormService {
  constructor() {
    AppDataSource.initialize().then(() => {
      console.info('[INFO] Database routines initialized.')
    })
  }

  getRepository<T = ObjectLiteral>(target: EntityTarget<T>) {
    return AppDataSource.getRepository(target)
  }

  getEntityManager() {
    return AppDataSource.manager
  }
}
