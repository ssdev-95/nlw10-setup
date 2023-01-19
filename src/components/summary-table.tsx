import dayjs from 'dayjs'
import { HabitDay } from './habit-day'
import { generateDaysRange } from "../utils/generate-dates-from-year-begining"

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const summaryDates = generateDaysRange()

const minimumDaysToFill = 18 * 7
const amountDaysToFill = minimumDaysToFill - summaryDates.length
const daysToFill = Array.from({ length: amountDaysToFill }).fill('empty')

export function SummaryTable() {
  const today = dayjs(new Date()).startOf('day')
  return (
	  <div className="w-full flex gap-3">
		  <div className="grid grid-rows-7 grid-flow-row gap-3">
			  {weekDays.map((weekDay, idx) => (
				  <div
						key={`${weekDay}-${idx}`}
						className="w-10 h-10 text-zinc-400 text-xl mb:text-lg font-bold flex items-center justify-center"
					>
					  {weekDay}
					</div>
				))}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3 overflow-auto">
			  {summaryDates.map((date) => (
				  <HabitDay
					  key={date.toString()}
						amount={8}
						completed={Math.round(Math.random()*8)}
						active={dayjs(date).isSame(today)}
					/>
				))}

				{amountDaysToFill > 0 && daysToFill.map((day, idx) => (
				  <div
					  key={`${day}-${idx}`}
					  className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
					/>
				))}
			</div>
		</div>
	)
}
