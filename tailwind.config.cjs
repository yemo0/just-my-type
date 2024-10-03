/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				neutral: {
					100: '#ffffff',  // gray-1
					200: '#fafafa',  // gray-2
					300: '#f5f5f5',  // gray-3
					400: '#f0f0f0',  // gray-4
					500: '#d9d9d9',  // gray-5
					600: '#bfbfbf',  // gray-6
					700: '#8c8c8c',  // gray-7
					800: '#595959',  // gray-8
					900: '#434343',  // gray-9
					1000: '#262626', // gray-10
					1100: '#1f1f1f', // gray-11
					1200: '#141414', // gray-12
					1300: '#000000', // gray-13
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
