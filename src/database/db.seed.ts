import './models/associations'
import dayjs from 'dayjs'

import { sequelize } from '../lib/sequelize'

import { Day } from './models/day'
import { Habit } from './models/habit'
import { DayHabit } from './models/day-habit'
import { HabitWeekDays } from './models/habit-week-days'

const habitSeedDefaults = [{
	id: '0730ffac-d039-4194-9571-01aa2aa0efbd',
	title: 'Eat less fry bread.',
	createdAt: '2022-12-31T03:00:00.000',
	weekDays: [1,2,3]
}, {
	id: '00880d75-a933-4fef-94ab-e05744435297',
	title: 'Drink 1L of water.',
	createdAt: '2023-01-03T03:00:00.000',
	weekDays: [3,4,5]
}, {
	id: 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00',
	title: 'Watch more animes.',
	createdAt: '2023-01-08T03:00:00.000',
	weekDays: [1,2,3,4,5,]
}]

async function dbSeed() {
	await sequelize.sync({ force: true })

	await Habit
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

	const [
		firstHabit,
		secondHabit
	] = habitSeedDefaults

	const days = await Day.bulkCreate([
		{
			date: dayjs('2023-01-02T03:00:00.000z')
			  .startOf('day')
			  .toDate()
		}, {
			date: dayjs('2023-01-06T03:00:00.000z')
			  .startOf('day')
				.toDate()
		}, {
			date: dayjs('2023-01-04T03:00:00.0000z')
			  .startOf('day')
				.toDate()
		}
	])

	const [firstDay, secondDay, thirdDay] = days

	await DayHabit.bulkCreate([
		{
		  dayId: firstDay.id,
		  habitId: firstHabit.id
		}, {
			dayId: secondDay.id,
			habitId: firstHabit.id
		}, {
			dayId: thirdDay.id,
			habitId:firstHabit.id
		}, {
			dayId: thirdDay.id,
			habitId: secondHabit.id
		}
	])
}

dbSeed()
  .then(() => console.info('[SEED] Done.'))
	.catch(console.error)
