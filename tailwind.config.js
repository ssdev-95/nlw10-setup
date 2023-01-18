/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./App.tsx',
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
			fontFamily: {
				regular: 'Regular',
				semibold: 'Medium',
				bold: 'Bold',
				extrabold: 'Extra'
			}
		}
  },
  plugins: [],
}
