import {
  Dimensions, TouchableOpacity, TouchableOpacityProps
} from 'react-native'

const WEEK_DAYS = 7
const HR_SC_PADDING = (32 * 2) / 5
const SC_WIDTH = Dimensions.get('screen').width

export const DAY_MARGIN_BTW = 8
export const DAY_SIZE = (SC_WIDTH / WEEK_DAYS) - (HR_SC_PADDING + 5)

type DayHabitProps = TouchableOpacityProps& {}

export function DayHabit({
  children,
	activeOpacity=0.68,
	...rest
}:DayHabitProps) {
  return (
	  <TouchableOpacity
			{...rest}
			activeOpacity={activeOpacity}
		  className="bg-zinc-900 rounded-lg border-2 border-zinc-800 m-1"
			style={{ width: DAY_SIZE, height: DAY_SIZE }}
		>
		  {children}
		</TouchableOpacity>
	)
}
