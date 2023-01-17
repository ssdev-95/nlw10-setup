import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name:'habits'})
export class Habit {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type:'varchar' })
    title: string

    @Column({ name:'created_at', type:'datetime', default:'NOW()' })
    createdAt: Date
}
