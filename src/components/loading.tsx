import { View, ActivityIndicator } from 'react-native'

export function Loading () {
	return (
	  <View style={{
		  flex: 1,
			backgroundColor: '#09090A',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
		  <ActivityIndicator
			  color="#f0f2f5"
				size="large"
			/>
		</View>
	)
}
