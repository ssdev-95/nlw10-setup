import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../database.connect'
import { DayHabitType } from './models.d'

type DHCreationalType = Optional<DayHabitType,'id'>

export class DayHabit
extends Model<DayHabitType, DHCreationalType> {
	declare id: string
	declare dayId: string
	declare habitId: string
}

sequelize.modelManager.addModel(DayHabit)

DayHabit.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	dayId: {
		type: DataTypes.STRING,
		unique: true
	},
	habitId: {
		type: DataTypes.STRING,
		unique: true
	}
}, {
	sequelize,
	tableName: 'day_habits',
	modelName: 'dayHabit'
})