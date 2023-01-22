import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../database.connect'
import { HabitType } from './models.d'

type HCreationalType = Optional<HabitType,'id'>

export class Habit
extends Model<HabitType, HCreationalType> {
	declare id: string
	declare title: string
}

sequelize.modelManager.addModel(Habit)

Habit.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	title: DataTypes.STRING
}, {
	sequelize,
	tableName: 'habits',
	modelName: 'habit'
})
