import * as path from 'node:path'
import { Sequelize } from 'sequelize'

const dbPath = path.resolve(
	process.cwd(),
	'src/db.sqlite'
)

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: dbPath
})

async function dbConnect() {
	await sequelize.sync()
	
	try {
		await sequelize.authenticate()

		console.log('[INFO] Database connection estabilished')
	} catch {
		console.log('[ERROR] Database connection failed')
	}
}

export { sequelize, dbConnect }
