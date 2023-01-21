import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm'

@Unique(['habitId', 'weekDay'])
@Entity({ name: 'habit_week_days' })
export class HabitWeekDays {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'week_day', type: 'integer' })
  weekDay: number

  @Column({ name: 'habit_id', type: 'varchar' })
  habitId: string
}
