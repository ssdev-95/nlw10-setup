import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm'

@Unique(['habitId', 'dayId'])
@Entity({ name: 'day_habits' })
export class DayHabit {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'day_id', type: 'varchar' })
  dayId: string

  @Column({ name: 'habit_id', type: 'varchar' })
  habitId: string
}
