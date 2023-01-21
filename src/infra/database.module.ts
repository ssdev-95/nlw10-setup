import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from './database/typeorm.config'
import { TypeormService } from './database.service'

import { Day, DayHabit, Habit, HabitWeekDays } from './database/entity'

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Day, DayHabit, Habit, HabitWeekDays])
  ],
  providers: [TypeormService],
  exports: [TypeormService]
})
export class DatabaseModule {}
