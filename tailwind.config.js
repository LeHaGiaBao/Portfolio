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
				darkSurfacePimary: '#1D2127',
				darkSufaceSecondary: '#252930',
				darkTextPrimary: '#D1D7EO',
				darkTextSecondary: '#AAAEB6',
			},

			fontFamily: {
				SFProDisplay: ['SF Pro Display', 'sans-serif'],
				Sacramento: ['Sacramento', 'sans-serif'],
				Montserrat: ['Montserrat', 'san-serif'],
				Inter: ['Inter', 'sans-serif'],
				Roboto: ['Roboto', 'sans-serif'],
				LibreFranklin: ['Libre Franklin', 'sans-serif'],
				Raleway: ['Raleway', 'sans-serif'],
				SourceSans: ['Source Sans', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				DMSans: ['DM Sans', 'sans-serif'],
				Playfair: ['Playfair Display', 'sans-serif'],
				Rubik: ['Rubik', 'sans-serif'],
				Lora: ['Lora', 'sans-serif'],
				Archivo: ['Archivo', 'sans-serif'],
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
