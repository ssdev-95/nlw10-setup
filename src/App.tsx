import { Header } from './components/header'
import { SummaryTable } from './components/summary-table'

export function App() {
  return (
	  <div className="min-h-screen w-screen flex items-center justify-center p-5">
		  <div className="w-full max-w-5xl flex flex-col gap-10">
			  <Header />
				<SummaryTable />
			</div>
		</div>
	)
}
