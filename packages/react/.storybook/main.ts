import { dirname, join } from 'path';
import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-interactions"),
		{
			name: "@storybook/addon-styling",
			options: {}
		}
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
export default config;

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}
