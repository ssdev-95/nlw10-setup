import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../../lib/sequelize'
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
		allowNull: false
	},
	habitId: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	tableName: 'day_habits',
	modelName: 'dayHabit',
	indexes: [{
		unique: true,
		fields: ['dayId', 'habitId']
	}]
})
