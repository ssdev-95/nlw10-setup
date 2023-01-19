import { Text, View, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import dayjs from 'dayjs'

import { BackButton } from '../components/back-button'
import { ProgressBar } from '../components/progressbar'
import { Checkbox } from '../components/checkbox'

interface Params {
  date: string
}

export function Habit() {
  const route = useRoute()
	const { date } = route.params as Params
	const parseDate = dayjs(date)
	const weekDay = parseDate.format('dddd')
	const dayMonth = parseDate.format('DD/MM')

  return (
	  <View className="flex-1 bg-zinc-1k pt-14 px-8 items-start">
		  <ScrollView
			  className="w-full"
			  showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 90 }}
			>
			  <View className="w-full items-start">
			    <BackButton />
				</View>

				<Text className="mt-6 text-zinc-400 text-base font-semibold">
				  {weekDay}
				</Text>

				<Text className="text-white text-3xl font-extrabold">
				  {dayMonth}
				</Text>

				<ProgressBar progress={30} />
				
				<View className="mt-4">
				  <Checkbox checked>
					  <Text className="text-white font-semibold">
						  Comer mais salada.
						</Text>
					</Checkbox>

					<Checkbox checked={false}>
					  <Text className="text-white font-semibold">
						  Codar por 18h.
						</Text>
					</Checkbox>
				</View>
			</ScrollView>
		</View>
	)
}
