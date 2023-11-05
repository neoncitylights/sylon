import { ExternalOption, OutputOptions } from 'rollup';
import { LibraryOptions } from 'vite';
import { assertType,expect, test } from 'vitest';

import tsConfig from './../tsconfig.json';
import viteConfig from './../vite.config.ts';

test('assert moduleResolution is "Bundler"', () => {
	expect(tsConfig.compilerOptions.moduleResolution).toBe('Bundler');
});

test('assert Storybook files are not compiled', () => {
	expect(tsConfig.exclude).toContain('src/**/*.stories.*');
});

test('assert compiler output is ESM', () => {
	const lib = viteConfig.build?.lib as LibraryOptions;
	expect(lib.formats).toContain('es');
});

test.each([
	['tailwindcss'],
	['react'],
	['react-dom'],
	['react/jsx-runtime'],
])('assert peer dependency "%s" is excluded', async (dependency) => {
	const { build } = viteConfig;
	const externalDeps = build?.rollupOptions?.external;

	expect(build?.rollupOptions?.external).not.toBeUndefined();
	expect(build?.rollupOptions?.external).not.toBe([]);
	assertType<ExternalOption[]>(externalDeps as any);

	expect(externalDeps).toContain(dependency);
});

test.each([
	['react', 'React'],
	['tailwindcss', 'tailwindcss'],
])('assert "%s" is setup as global with Rollup', async (dep, global) => {
	const { build } = viteConfig;
	const output = build?.rollupOptions?.output as OutputOptions;
	const globals = output?.globals;

	expect(globals).not.toBeUndefined();
	expect(globals).not.toBe({});
	assertType<Record<string, string>>(globals as any);

	// look at each key-value pair
	expect(globals).toHaveProperty(dep);
	expect(globals?.[dep]).toBe(global);
});
