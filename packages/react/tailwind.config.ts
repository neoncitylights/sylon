import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
