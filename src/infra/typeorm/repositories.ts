import { AppDataSource } from './data-source'
import { Habit } from './entity/Habit'
import { HabitWeekDays } from './entity/HabitWeekDays'

const { getRepository } = AppDataSource

export const habitsRepository = getRepository(Habit)
export const weekDaysRepository = getRepository(HabitWeekDays)
