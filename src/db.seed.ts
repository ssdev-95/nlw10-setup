import './models/associations'
import dayjs from 'dayjs'

import { sequelize } from './database.connect'

import { Day } from './models/day'
import { Habit } from './models/habit'
import { DayHabit } from './models/day-habit'
import { HabitWeekDays } from './models/habit-week-days'

async function dbSeed() {
	await sequelize.sync({ force: true })


	const day = await Day.create({
		date: dayjs().startOf('day').toDate()
	})

	const habits = await Habit.bulkCreate([
		{ title:'Buy less salame.' },
		{ title:'Drink 1L of water.' },
		{ title:'Watch more animes.' }
	])

	await DayHabit.create({
		dayId: day.id,
		habitId: habits[0].id
	})

	await HabitWeekDays.create({
		weekDay: 4,
		habitId: habits[0].id
	})

	console.info('[SEED] Done.')
}

dbSeed()
