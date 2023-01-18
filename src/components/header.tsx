import { Plus } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

export function Header() {
  return (
	  <header className="flex items-center justify-between">
		  <img
			  className="mb:h-12"
			  src={logoImage}
				alt="Dev Habits"
			/>
			
			<button className="flex items-center gap-3 px-6 py-2 mb:p-3 rounded-lg bg-violet-500/0 ring ring-[2px] ring-violet-500 font-semibold mb:active:ring-violet-300 md:hover:ring-violet-300">

  			<Plus
				  size={20}
					weight="bold"
					className="text-violet-500"
				/>
				<span className="mb:hidden">New habit</span>
			</button>
		</header>
	)
}
