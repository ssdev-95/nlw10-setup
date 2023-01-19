import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import colors from 'tailwindcss/colors'

export function BackButton() {
  const { goBack } = useNavigation()
  
	return (
	  <TouchableOpacity
		  onPress={goBack}
		  activeOpacity={0.7}
			className="flex-row items-center justify-center"
		>
		  <Feather
			  name="arrow-left"
				size={28}
				color={colors.zinc[400]}
			/>
		</TouchableOpacity>
	)
}
