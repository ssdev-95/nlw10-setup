import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../database.connect'
import { HabitWeekDaysType } from './models.d'

type HWDCreationalType = Optional<HabitWeekDaysType,'id'>

export class HabitWeekDays
extends Model<HabitWeekDaysType, HWDCreationalType> {
	declare id: string
	declare habitId: string
	declare weekDay: number
}

sequelize.modelManager.addModel(HabitWeekDays)

HabitWeekDays.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	habitId: {
		type: DataTypes.STRING,
		unique: true
	},
	weekDay: {
		type: DataTypes.INTEGER,
		unique: true
	}
}, {
	sequelize,
	tableName: 'habit_week_days',
	modelName: 'habitWeekDays'
})
