import { Day } from './day'
import { Habit } from './habit'
import { DayHabit } from './day-habit'
import { HabitWeekDays } from './habit-week-days'

Day.hasMany(DayHabit)
Habit.hasMany(DayHabit)
Habit.hasMany(HabitWeekDays)

DayHabit.belongsTo(Day, {
	targetKey: 'id',
	foreignKey: 'dayId'
})

DayHabit.belongsTo(Habit, {
	targetKey: 'id',
	foreignKey: 'habitId'
})

HabitWeekDays.belongsTo(Habit, {
	targetKey: 'id',
	foreignKey: 'habitId'
})
