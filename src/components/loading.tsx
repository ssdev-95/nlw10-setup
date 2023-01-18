import { View, ActivityIndicator } from 'react-native'
import colors from 'tailwindcss/colors'

export function Loading () {
	return (
	  <View style={{
		  flex: 1,
			backgroundColor: '#09090A',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
		  <ActivityIndicator
			  color={colors.violet[500]}
				size="large"
			/>
		</View>
	)
}
