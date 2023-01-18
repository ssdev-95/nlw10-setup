import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import colors from 'tailwindcss/colors'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
	  <View className="w-full flex-row items-center justify-between">
		  <Logo />

			<TouchableOpacity
			  className="flex-row gap-3 items-center jusitfy-center"
				activeOpacity={0.7}
			>
			  <Feather
				  name="plus-square"
					color={colors.violet[500]}
					size={42}
				/>
			</TouchableOpacity>
		</View>
	)
}
