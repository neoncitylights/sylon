import path from 'node:path';

import react from '@vitejs/plugin-react';
import tailwindPlugin from 'tailwindcss';
import dts from 'vite-plugin-dts';
import { defineProject } from 'vitest/config';

import { peerDependencies } from './package.json';

export default defineProject({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			formats: ['es'],
			fileName: () => 'sylon.mjs',
		},
		rollupOptions: {
			external: [
				...Object.keys(peerDependencies),
				'react/jsx-runtime',
				'tailwindcss',
			],
			output: {
				globals: {
					react: 'React',
					'tailwindcss': 'tailwindcss',
				},
			},
		},
	},
	define: {
		'import.meta.vitest': 'undefined',
	},
	css: {
		postcss: {
			plugins: [
				tailwindPlugin(),
			],
		},
	},
	plugins: [
		dts({
			insertTypesEntry: true,
		}),
		react(),
	],
	test: {
		includeSource: ['src/**/*.{js,ts}'],
		coverage: {
			include: ['src/**/*.{js,ts}'],
			provider: 'v8',
			reporter: [ 'text', 'json', 'html' ],
		},
	},
});
