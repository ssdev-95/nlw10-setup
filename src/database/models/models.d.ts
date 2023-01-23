export type DayType = {
	id: string
	date: Date
}

export type HabitType = {
	id: string
	title: string
}

export type DayHabitType = {
	id: string
	dayId: string
	habitId: string
}

export type HabitWeekDaysType = {
	id: string
	habitId: string
	weekDay: number
}
