import { TypeormService } from '../database.service'
import { Habit } from './entity'

async function runSeeds() {
  const service = new TypeormService()
  await service.getEntityManager().clear(Habit)

  const habit1 = service
	  .getEntityManager()
		.create(Habit, {
			title: 'Comer salada',
			createdAt: new Date()
		})

		console.log(habit1)
}

runSeeds()
