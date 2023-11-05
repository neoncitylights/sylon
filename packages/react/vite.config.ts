import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json' assert { type: "json" };
import tailwindPlugin from 'tailwindcss';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'sylon',
			formats: ['es'],
			fileName: (format) => `sylon.${format}.js`,
		},
		rollupOptions: {
			external: [
				...Object.keys(peerDependencies),
				"react/jsx-runtime",
				'tailwindcss',
			],
			output: {
				globals: {
					react: 'React',
					'tailwindcss': 'tailwindcss',
				}
			}
		},
	},
	css: {
		postcss: {
			plugins: [
				tailwindPlugin(),
			]
		},
	},
	plugins: [
		dts(),
		react(),
	],
});
