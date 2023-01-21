import { Entity, Column, Unique, PrimaryGeneratedColumn } from 'typeorm'

@Unique(['date'])
@Entity({ name: 'days' })
export class Day {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'datetime' })
  date: Date
}
