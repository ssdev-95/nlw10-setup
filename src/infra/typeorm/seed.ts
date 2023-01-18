import { Dayjs } from 'dayjs'
import { habitsRepository } from './repositories'

export async function main() {
	await habitsRepository.clear()
	const habit = habitsRepository.create()
	habit.createdAt = new Dayjs().startOf('day').toDate()
	habit.title = 'Fazer carinho na gato.'
	habitsRepository.save(habit, {
		data: {
			weekDays: [
				{ week_day: 0 },
				{ week_day: 1 },
				{ week_day: 2 }
			]
		}
	})
}

main()
  .then(() => console.info('[SEED] Seed succeeded.'))
	.catch(console.error)
