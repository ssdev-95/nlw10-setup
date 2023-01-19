import { View } from 'react-native'

interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props:ProgressBarProps) {

  return (
	  <View className="w-full h-3 my-4 rounded-full bg-zinc-800 overflow-hidden">
		  <View
			  className="h-full rounded-full bg-violet-600"
				style={{ width: `${props.progress}%` }}
			/>
		</View>
	)
}
