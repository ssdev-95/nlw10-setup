import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name:'habit_week_days'})
export class HabitWeekDays {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ type:'varchar', unique: true })
	habit_id: string

	@Column({ type: 'integer', unique: true })
	week_day: number
}
