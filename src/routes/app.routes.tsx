import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'


import { Habit } from '../screens/habit'
import { Home } from '../screens/home'
import { NewHabit } from '../screens/new-habit'

const Stack = createNativeStackNavigator()
export function AppRoutes () {
  return (
	  <Stack.Navigator
		  initialRouteName="home"
			screenOptions={{
			  headerShown: false
			}}
		>
		  <Stack.Screen name="home" component={Home} />
			<Stack.Screen name="habit" component={Habit} />
			<Stack.Screen name="new" component={NewHabit} />
		</Stack.Navigator>
	)
}
