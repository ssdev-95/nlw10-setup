import {
	Text,
	View,
	StatusBar,
	StyleSheet
} from 'react-native'

import {
  useFonts,
	Inter_400Regular as Regular,
	Inter_600SemiBold as Medium,
	Inter_700Bold as Bold,
	Inter_800ExtraBold as Extra
} from '@expo-google-fonts/inter'

import { Loading } from './src/components/loading'

export default function App() {
  const [fontsLoaded] = useFonts({
	  Regular, Medium, Bold, Extra
	})

	if(!fontsLoaded) {
	  return <Loading />
	}
	
	return (
    <View style={styles.container}>
      <Text style={styles.text}>
			  Hello nlw.
			</Text>
      <StatusBar
			  barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
	text: {
	  color: '#f0f2f5',
		fontSize: 24
	}
})
