import { View } from 'react-native'
import { Header } from '../components/header'
import { SummaryTable } from '../components/summary-table'

export function Home() {
  return (
		<View className="flex-1 bg-zinc-1k gap-3 pt-16 px-8 items-center">
		  <Header />
			<SummaryTable />
		</View>
	)
}
