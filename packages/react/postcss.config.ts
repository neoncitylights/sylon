import type { Config } from 'postcss-load-config';

export default {
	plugins: {
		tailwindcss: {
			config: 'src/tailwind.config.ts',
		},
		autoprefixer: {},
	},
} satisfies Config;
