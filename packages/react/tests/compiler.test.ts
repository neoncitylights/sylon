import { resolve } from 'node:path';

import { ExternalOption, OutputOptions } from 'rollup';
import { LibraryOptions } from 'vite';
import { assertType, describe, expect, test } from 'vitest';

import packageJson from './../package.json';
import tsConfig from './../tsconfig.json';
import viteConfig from './../vite.config.ts';

describe('package.json', () => {
	const exports = packageJson.exports['.'];

	test('assert ESM support', () => {
		expect(packageJson.type).toBe('module');

		expect(packageJson['main']).toBeUndefined();
		expect(packageJson.module).toBeDefined();

		expect(exports).toBeDefined();
	});

	test.each([
		[
			packageJson.types, 'types',
			exports.types, 'exports.[.].types',
		],
		[
			packageJson.module, 'module',
			exports.import, 'exports.[.].import',
		],
	])('assert filepaths %s (%s) and %s (%s) are consistent', (path1, _key1, path2, _key2) => {
		expect(resolve(path1)).toEqual(resolve(path2));
	});

	test('assert peer dependencies', () => {
		const peerDeps = Object.keys(packageJson.peerDependencies);
		expect(peerDeps).toContain('react');
		expect(peerDeps).toContain('react-dom');
	});
});

describe('TypeScript config', () => {
	describe('assert TS compiler setup for Vite is correct', () => {
		const { compilerOptions } = tsConfig;

		test.each([
			['moduleResolution', 'Bundler'],
			['module', 'ESNext'],
			['noEmit', true],
		])('assert %s is set to %s', (key, value) => {
			expect(compilerOptions[key]).toBe(value);
		});
	});

	test.each([
		['src/**/*.stories.*', 'Storybook'],
		['node_modules', 'Node modules'],
		['dist', 'Compiled output'],
	])('assert "%s" directory (%s) is not compiled', (directory) => {
		expect(tsConfig.exclude).toContain(directory);
	});

	test('assert JSX construct uses React 17 transform', () => {
		expect(tsConfig.compilerOptions.jsx).toBe('react-jsx');
	});

	test.each([
		['ES2022'],
		['DOM'],
		['DOM.Iterable'],
	])('type definitions for built-in JS APIS includes %s', (libType) => {
		expect(tsConfig.compilerOptions.lib).toContain(libType);
	});
});

describe('Vite config', () => {
	test('assert compiler output is ESM', () => {
		const lib = viteConfig.build?.lib as LibraryOptions;
		expect(lib.formats).toContain('es');
	});

	test.each([
		['tailwindcss'],
		['react'],
		['react-dom'],
		['react/jsx-runtime'],
	])('assert peer dependency "%s" is excluded', (dependency) => {
		const { build } = viteConfig;
		const externalDeps = build?.rollupOptions?.external;

		expect(build?.rollupOptions?.external).toBeDefined();
		expect(build?.rollupOptions?.external).not.toBe([]);
		assertType<ExternalOption[]>(externalDeps as any);

		expect(externalDeps).toContain(dependency);
	});

	test.each([
		['react', 'React'],
		['tailwindcss', 'tailwindcss'],
	])('assert "%s" is setup as global with Rollup', (dependency, global) => {
		const { build } = viteConfig;
		const output = build?.rollupOptions?.output as OutputOptions;
		const globals = output?.globals;

		expect(globals).toBeDefined();
		expect(globals).not.toBe({});
		assertType<Record<string, string>>(globals as any);

		// look at each key-value pair
		expect(globals).toHaveProperty(dependency);
		expect(globals?.[dependency]).toBe(global);
	});
});
