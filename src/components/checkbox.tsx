import { useState } from 'react'
import clsx from 'clsx'

import * as RDCheckbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

interface CheckboxProps {
  title: string
}

export function Checkbox(props: CheckboxProps) {
  const [checked, toggle] = useState<boolean>(false)

	function onCheckedChange(value:boolean) {
	  toggle(value)
	}

  return (
	  <RDCheckbox.Root onCheckedChange={onCheckedChange}>
		  <label className="flex w-fit gap-4 items-center justify-center">
			  <div className={clsx('h-6 w-6 rounded-[4px] border-2 p-1 flex items-center justify-center', {
				  'border-violet-400 bg-violet-600': checked,
					'border-zinc-600 bg-zinc-800': !checked
				})}>
  			  <RDCheckbox.Indicator>
  		      <CheckIcon className="font-bold" />
				  </RDCheckbox.Indicator>
				</div>

				<span className="font-semibold">
				  {props.title}
				</span>
			</label>
		</RDCheckbox.Root>
	)
}
