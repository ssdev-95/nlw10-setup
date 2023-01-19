import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import {Checkbox} from './checkbox'
import { HabitProgressbar } from './habit-progressbar'

interface HabitProps {
  amount:number
	completed:number
	active: boolean
}

export function HabitDay(props:HabitProps) {
  const progressPercentage = Math
	  .round((props.completed/props.amount)*100)
  return (
	  <Popover.Root>
  	  <Popover.Trigger
	  		className={clsx('w-10 h-10 border-2 rounded-lg', {
				  'border-zinc-800 bg-zinc-900': progressPercentage === 0,
					'border-violet-800 bg-violet-900': progressPercentage > 0 && progressPercentage <= 16,
					'border-violet-700 bg-violet-900': progressPercentage > 16 && progressPercentage <= 32,
					'border-violet-600 bg-violet-800': progressPercentage > 32 && progressPercentage <= 48,
					'border-violet-500 bg-violet-700': progressPercentage > 48 && progressPercentage <= 64,
					'border-violet-400 bg-violet-600': progressPercentage > 64 && progressPercentage <= 80,
					'border-violet-300 bg-violet-500': progressPercentage > 80,
					'border-4 border-zinc-200': props.active
				})}
  		/>

			<Popover.Portal>
  			<Popover.PopoverContent className="bg-zinc-900 w-full min-w-[300px] p-4 rounded-xl flex flex-col gap-5">
  			  <Popover.Arrow className="fill-zinc-900 h-3 w-5" />
					<span className="text-sm font-regular text-zinc-400">
					  Monday

  					<p className="text-3xl text-white font-bold mt-2">
  					  18/01
  					</p>
					</span>

  				<HabitProgressbar
					  progress={progressPercentage}
					/>

					<div className="w-full flex flex-col gap-3">
					  <Checkbox title="Codar o dia todo." />
						<Checkbox title="Papear no discord." />
					</div>

  			</Popover.PopoverContent>
			</Popover.Portal>
		</Popover.Root>
	)
}
