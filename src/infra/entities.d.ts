export type DayDTO = {
	id: string
	date: Date
}

export type HabitDTO = {
	id: string

	title: string
	created_at: Date
}

export type DayHabitDTO = {
	id: string

	day_id: string
	habit_id: string
}

export type HabitWeekDaysDTO = {
	id: string

	habit_id: string
	week_day: number
}
