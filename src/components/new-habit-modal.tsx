import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { X as CloseIcon } from 'phosphor-react'
import { NewHabitForm } from './new-habit-form'

interface ModalProps {
  children: ReactNode
}

export function NewHabitModal(props: ModalProps) {
  return (
	  <Dialog.Root>
		  {props.children}

			<Dialog.Portal>
			  <Dialog.Overlay className="w-screen h-screen bg-black/40 fixed inset-0" />

				<Dialog.Content className="w-full max-w-sm p-8 rounded-lg bg-zinc-900 flex flex-col gap-3 absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]">
				  <div className="w-full flex items-center justify-between">
  				  <Dialog.Title className="text-3xl font-bold">
	  				  New habit
		  			</Dialog.Title>

			  		<Dialog.Close className="text-zinc-400">
				  	  <CloseIcon
					  	  size={24}
						  	weight="bold"
  						/>
	  				</Dialog.Close>
					</div>

					<NewHabitForm />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
