/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#FAFAFA',
				black: '#000000',
				white: '#FFFFFF',
				grey: '#212121',
				graytext: '#BFBFBF',
				dark: '#171C28',
				footerwhite: '#F8FAFC',
				footerdark: '#1A1A1A',
			},

			fontFamily: {
				sacramento: ['Sacramento', 'sans-serif'],
				Montserrat: ['Montserrat', 'san-serif'],
				SF: ['SF Pro Display', 'sans-serif'],
			},
		},
	},
	plugins: [
		// require("daisyui"),
		// require('flowbite/plugin'),
		// require('tw-elements/dist/plugin'),
		// require('kutty'),
	],
}
