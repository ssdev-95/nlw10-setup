import { DataSourceOptions } from 'typeorm'
import * as path from 'node:path'

import { Day, DayHabit, Habit, HabitWeekDays } from './entity'

const basePath = 'src/infra/database'

const migrationsPath = path.resolve(process.cwd(), basePath, 'migration/*')

const baseConfig = {
  synchronize: false,
  logging: false,
  migrationsRun: false,
  entities: [Day, DayHabit, Habit, HabitWeekDays],
  migrations: [migrationsPath],
  subscribers: []
}

/*export const prodConfig:DataSourceOptions = {
	type: 'postgres',
	//host: process.env.DB_HOST,
	url: process.env.DB_URL,
	//port: parseInt(process.env.DB_PORT ?? '3306'),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	...baseConfig
}*/

const databasePath = path.resolve(process.cwd(), basePath, 'db.sqlite')

export const config: DataSourceOptions = {
  type: 'better-sqlite3',
  database: databasePath,
  ...baseConfig
}
