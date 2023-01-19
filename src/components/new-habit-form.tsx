import { Checkbox } from './checkbox'
import { Check } from 'phosphor-react'

const weekDaysFull = [
  'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

export function NewHabitForm() {
  return (
	  <form className=" w-full flex flex-col gap-4">
		  <label className="flex flex-col gap-2">
			  <strong className="text-md font-semibold">
  			  What accomplishment
				</strong>
			  <input
				  className="bg-zinc-800 text-white placeholder:text-zinc-400 border-0 focus:ring-2 focus:ring-violet-500 p-2"
				  placeholder="eg.: Study web dev for 1h, etc."
				/>
			</label>

			<strong className="text-md font-semibold">
			  How recurrent ?
			</strong>

			<div className="flex flex-col gap-2">
			  {weekDaysFull.map((day) => (
				  <Checkbox
					  key={day}
						title={day}
					/>
				))}
			</div>

			<button className="flex gap-3 items-center justify-center p-3 rounded-lg bg-green-600 md:hover:bg-green-500 mb:active:bg-green-500">
			  <Check
				  size={24}
					weight="bold"
				/>
			  Save
			</button>
		</form>
	)
}
