import {
	Model,
	Optional,
	DataTypes
} from 'sequelize'

import { sequelize } from '../../lib/sequelize'
import { DayHabit } from './day-habit'
import { DayType } from './models.d'

type DCreationalType = Optional<DayType,'id'>

export class Day
extends Model<DayType, DCreationalType> {
	declare id: string
	declare date: Date
	declare dayHabits: DayHabit[]
}

sequelize.modelManager.addModel(Day)

Day.init({
	id: {
		type: DataTypes.UUID,
		primaryKey: true,
		defaultValue: DataTypes.UUIDV4
	},
	date: {
		type: DataTypes.DATE,
		allowNull: false
	}
}, {
	sequelize,
	tableName: 'days',
	modelName: 'day',
	indexes: [{
		unique: true,
		fields: ['date']
	}]
})
