import { View, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { DayHabit, DAY_SIZE } from './day-habit'

import { generateDaysRange } from '../utils/generate-dates-from-year-begining'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const habitsDaysFromYearStart = generateDaysRange()

const minimumDaysToFill = 18 * 6
const amountDaysToFill = minimumDaysToFill - habitsDaysFromYearStart.length

const daysToFill = Array
  .from<string>({ length: amountDaysToFill })
	.fill('empty')

export function SummaryTable() {
  const { navigate } = useNavigation()

	return (
	<>
		<View className="w-full flex-row mt-6 mb-2 items-center">
		  {weekDays.map((day,idx) => (
			  <Text
				  key={`${day}-${idx}`}
		  		className="text-zinc-400 text-xl text-center font-bold mx-1"
				style={{ width: DAY_SIZE }}
				>
				  {day}
		  	</Text>
			))}
		</View>

		<ScrollView
			contentContainerStyle={{ paddingBottom: 116 }}
		  showsVerticalScrollIndicator={false}
		>
		  <View
				className="flex-row flex-wrap items-center"
			>
			  {habitsDaysFromYearStart.map((day) => (
			    <DayHabit
					  key={day.toString()}
						onPress={() => navigate('habit', {
						  date: day.toISOString()
						})}
					/>
				))}

				{amountDaysToFill && daysToFill.map((day,idx) => (
				  <View
					  key={`${day}-${idx}`}
						className="bg-zinc-900 border-2 border-zinc-800 m-1 rounded-lg opacity-40"
						style={{
						  width: DAY_SIZE,
							height: DAY_SIZE
						}}
					/>
				))}
			</View>			
		</ScrollView>
	</>
	)
}
