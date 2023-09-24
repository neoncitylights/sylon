import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'sylon',
			fileName: (format) => `sylon.${format}.js`,
		},
	},
	plugins: [
		dts(),
		react(),
	],
});
