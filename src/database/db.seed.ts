import './models/associations'
import dayjs from 'dayjs'

import { sequelize } from '../lib/sequelize'

import { Day } from './models/day'
import { Habit } from './models/habit'
import { DayHabit } from './models/day-habit'
import { HabitWeekDays } from './models/habit-week-days'

const habitSeedDefaults = [{
	id: '28rhs-2je8d2-i2jeeo-wiejak28',
	title: 'Eat less fry bread.',
	createdAt: '2023-01-01T03:45:00.000Z',
	weekDays: [1,2,3]
}, {
	id: '28289-18dhH2-sjdijn-28sjjdjm',
	title: 'Drink 1L of water.',
	createdAt: '2023-01-02T03:45:00.000Z',
	weekDays: [4,5,6]
}, {
	id: '1iebj-j2idj3-jefijr-jef8rjjj',
	title: 'Watch more animes.',
	createdAt: '2023-01-08T03:45:00.000Z',
	weekDays: [1,2,3,4,5]
}]

async function dbSeed() {
	await sequelize.sync({ force: true })

	const habits = await Habit
	  .bulkCreate(habitSeedDefaults.map(habit => {
			return {
				id: habit.id,
				title: habit.title,
				createdAt: dayjs(habit.createdAt)
				  .startOf('day')
					.toDate()
			}
		}))

	const habitWeekDays = habitSeedDefaults
	  .map(({ weekDays, id }) => {
			return HabitWeekDays
			  .bulkCreate(weekDays.map((weekDay) => ({
					weekDay,
					habitId: id
				})))
		})


	await Promise.all(habitWeekDays)

	/*const habitDays = HabitWeekDays
	  .bulkCreate(habitSeedDefaults.map(habit => {
			return {
				weekDay: dayjs(habit.createdAt).get('day'),
				habitId: habit.id
			}
		}))*/


	const [firstHabit] = habitSeedDefaults

	const day = await Day.create({
		date: dayjs(firstHabit.createdAt)
			.startOf('day')
			.toDate()
	})

	await DayHabit.create({
		dayId: day.id,
		habitId: firstHabit.id
	})
}

dbSeed()
  .then(() => console.info('[SEED] Done.'))
