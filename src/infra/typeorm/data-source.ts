import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Habit } from './entity/Habit'

export const AppDataSource = new DataSource({
	type: 'better-sqlite3',
	database: __dirname + '/db/db.sqlite',
	synchronize: false,
	logging: false,
	entities: [Habit],
	migrations: [__dirname + '/migration/*'],
	subscribers: [],
})

AppDataSource
  .initialize()
	.then(() => console.info('[LOG] Database connection stabilished.'))
