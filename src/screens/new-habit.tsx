import {
  View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useState } from 'react'

import { BackButton } from '../components/back-button'
import { Checkbox } from '../components/checkbox'

import colors from 'tailwindcss/colors'

const weekDaysFull = [
  'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]

export function NewHabit() {
  const [selectedWeekDays, setSelectedWeekDays] = useState<number[]>([])

	function handleSelectWeekDay(weekDay:number) {
	  if(selectedWeekDays.includes(weekDay)) {
		  const updated = selectedWeekDays
			  .filter(day => day !== weekDay)
			return setSelectedWeekDays([...updated])
		}
	
    return setSelectedWeekDays(prev => [
		  ...prev,
			weekDay
		])
	}

	return (
	  <View className="flex-1 bg-zinc-1k pt-14 px-8 items-start">
  		<ScrollView
  		  showsVerticalScrollIndicator={false}
  			contentContainerStyle={{ paddingBottom: 90 }}
  		>
		    <View className="w-full flex-row items-center justify-between mb-5">
  			  <BackButton />

			   	<Text className="text-lg text-white font-semibold text-lg mr-8">
		  		  New Habit
	  			</Text>

  				<View className="h-full" />
  			</View>

  			<Text className="text-white text-lg mt-4 mb-3">
  			  What accomplishment
  			</Text>

  			<TextInput
			    className="h-10 w-full rounded-lg pl-4 bg-zinc-800 text-white focus:border-2 focus:border-violet-400"
  				placeholder="eg.: Study web dev for 1h, etc.."
				  placeholderTextColor={colors.zinc[400]}
			  />

		  	<Text className="text-white text-lg mt-6 mb-3">
  		  	How recurrent
	    	</Text>

  			{weekDaysFull.map((weekDay, index) => (
  		    <Checkbox
  		  	  key={weekDay}
		  			checked={selectedWeekDays.includes(index)}
	  				onPress={() => handleSelectWeekDay(index)}
    			>
  			  	<Text className="text-white">
  		  		  {weekDay}
  	  			</Text>
	  			</Checkbox>
  			))}

			  <TouchableOpacity
		  		className="w-full h-14 flex-row items-center justify-center rounded-md bg-green-600 mt-6"
	  			activeOpacity={0.7}
  			>
			    <Feather
			  	  name="check"
		  			size={20}
	  				color={colors.white}
  				/>

  			  <Text className="font-semibold text-base text-white ml-3">
				    Confirm
				  </Text>
			  </TouchableOpacity>
		  </ScrollView>
		</View>
	)
}
