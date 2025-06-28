/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { 
            colors: {
            'baggrund': '#32557B',
            'farve1': '#252422',
            'farve2': '#D66445',
            'farve3': '#E7E6E3',


          },},
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
