/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#FAFAFA',
				black: '#000000',
				white: '#FFFFFF',
				grey: '#212121',
				footer: '#1A1A1A',
				graytext: '#BFBFBF',
			},

			fontFamily: {
				sacramento: ['Sacramento', 'sans-serif'],
				Montserrat: ['Montserrat', 'san-serif'],
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
