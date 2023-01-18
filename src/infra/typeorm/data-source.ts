import 'reflect-metadata'
import { DataSource } from 'typeorm'

import {
	Day,
	DayHabit,
	Habit,
	HabitWeekDays
} from './entity'

export const AppDataSource = new DataSource({
	type: 'better-sqlite3',
	database: __dirname + '/db/db.sqlite',
	synchronize: false,
	logging: false,
	entities: [
		Day,
		DayHabit,
		Habit,
		HabitWeekDays
	],
	migrations: [__dirname + '/migration/*'],
	subscribers: [],
})

AppDataSource
  .initialize()
	.then(() => console.log('[LOG] DB connection stabilished'))
