import { sequelize } from '../lib/sequelize'

async function getSummaryController() {
	const [results] = await sequelize.query(`
		SELECT
		  D.id,
			D.date,
			(
				SELECT
				  cast(count(*) as float)
				FROM day_habits DH
				WHERE DH.dayId = D.id
			) as completed,
			(
				SELECT
				  cast(count(*) as float)
				FROM habit_week_days HWD
				JOIN habits H
				  ON H.id = HWD.habitId
				WHERE
				  HWD.weekDay = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
					AND H.createdAt <= D.date
			) as ammount
		FROM days D
	`)

	return { results }
}

export { getSummaryController }
