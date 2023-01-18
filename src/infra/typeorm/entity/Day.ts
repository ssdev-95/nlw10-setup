import {
	Column,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity({ name:'days'})
export class Day {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'datetime', unique: true })
    date: Date
}
