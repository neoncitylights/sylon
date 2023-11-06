/** @types {import('postcss-load-config').Config} */
export default {
	plugins: {
		tailwindcss: {
			config: 'src/tailwind.config.ts',
		},
		autoprefixer: {},
	},
};
