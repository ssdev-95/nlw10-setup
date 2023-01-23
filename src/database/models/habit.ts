import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../../lib/sequelize'
import { HabitType as BaseHabit } from './models.d'

interface HabitType  extends BaseHabit {
	createdAt: Date
}

type HCreationalType = Optional<HabitType,'id'|'createdAt'>

export class Habit
extends Model<HabitType, HCreationalType> {
	declare id: string
	declare title: string
	declare createdAt: Date
}

sequelize.modelManager.addModel(Habit)

Habit.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	createdAt: DataTypes.DATE
}, {
	sequelize,
	tableName: 'habits',
	modelName: 'habit',
	indexes: [{
		unique: true,
		fields: ['title','createdAt']
	}]
})
