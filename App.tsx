import { StatusBar } from 'react-native'
import { Home } from './src/screens/home'

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
    <>
      <Home />
      <StatusBar
			  barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
    </>
  )
}
