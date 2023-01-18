/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./index.html',
		'./src/**/*.tsx'
	],
  theme: {
    extend: {
			colors: {
				white: '#f0f2f5',
				zinc: {
					'1k': '#09090A'
				}
			},
			screens: {
				mb: { max: '720px' },
				md: { min: '720px' }
			},
			gridTemplateRows: {
				'7': 'repeat(7,minmax(0,1fr))'
			}
		}
  },
  plugins: [],
}
