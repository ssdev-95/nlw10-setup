import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'habits' })
export class Habit {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  title: string

  @Column({ name: 'created_at', type: 'datetime' })
  createdAt: Date
}
