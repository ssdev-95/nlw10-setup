import React from 'react'
import ReactDOM from 'react-dom/client'

import eruda from 'eruda'
import erudaDOM from 'eruda-dom'

import { App } from './App'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if(
  import.meta.env.DEV &&
	document &&
	window.innerWidth <= 720
) {
  eruda.init()
	eruda.add(erudaDOM)
}
