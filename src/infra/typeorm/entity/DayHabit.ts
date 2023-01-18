import {
	Column,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name:'day_habits'})
export class DayHabit {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ type: 'varchar', unique: true })
	day_id: string

	@Column({ type: 'varchar', unique: true })
	habit_id: string
}
