import * as Progress from '@radix-ui/react-progress'

interface ProgressProps {
  progress: number
}

export function HabitProgressbar(props: ProgressProps) {
  const progressPercentage = `${props.progress}%`
  return (
	  <Progress.Root>
		  <Progress.Progress className="w-full bg-zinc-700 rounded-full overflow-hidden">
   		  <Progress.Indicator
  			   className="h-3 bg-violet-600 rounded-full"
  				 style={{ width:progressPercentage }}
  			/>
			</Progress.Progress>
		</Progress.Root>
	)
}
