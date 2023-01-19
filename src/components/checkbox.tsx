import { View, TouchableOpacity } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

type CheckboxProps = TouchableOpacityProps & {
  checked: boolean
}

export function Checkbox({
  checked, children, ...props
}:CheckboxProps) {
  return (
	  <TouchableOpacity
		  {...props}
		  className="flex-row justify-start items-center my-3 gap-4"
  	  activeOpacity={0.7}
  	>
		  {checked ? (
			  <View className="w-6 h-6 items-center justify-center rounded-[4px] ring-2 bg-violet-500 ring-violet-300">
  			  <Feather
    		    name="check"
    				size={10}
  	  			color={colors.white}
    	  	/>
    		</View>
			) : (
			  <View
				  className="w-6 h-6 items-center justify-center rounded-[4px] ring-2 ring-zinc-400 bg-zinc-800"
				/>
			)}

			{children}
    </TouchableOpacity>
	)
}
