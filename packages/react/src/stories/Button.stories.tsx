import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AllButtons: Meta<typeof Button> = {
	render: () =>
		<div className='flex flex-col gap-2'>
			<div className='flex flex-row gap-2'>
				<Button kind='primary' intent='default'>Hello!</Button>
				<Button kind='primary' intent='progressive'>Hello!</Button>
				<Button kind='primary' intent='destructive'>Hello!</Button>
			</div>
			<div className='flex flex-row gap-2'>
				<Button kind='normal' intent='default'>Hello!</Button>
				<Button kind='normal' intent='progressive'>Hello!</Button>
				<Button kind='normal' intent='destructive'>Hello!</Button>
			</div>
			<div className='flex flex-row gap-2'>
				<Button kind='quiet' intent='default'>Hello!</Button>
				<Button kind='quiet' intent='progressive'>Hello!</Button>
				<Button kind='quiet' intent='destructive'>Hello!</Button>
			</div>
		</div>,
	parameters: {
		controls: {
			exclude: ['kind', 'intent', 'isIconOnly'],
		},
	},
};

export const PrimaryButton: Story = {
	args: {
		children: 'Button',
		kind: 'primary',
		intent: 'default',
	},
	parameters: {
		controls: {
			exclude: ['kind'],
		},
	},
};

export const NormalButton: Story = {
	args: {
		children: 'Button',
		kind: 'normal',
		intent: 'default',
	},
	parameters: {
		controls: {
			exclude: ['kind'],
		},
	},
};

export const QuietButton: Story = {
	args: {
		children: 'Button',
		kind: 'quiet',
		intent: 'default',
	},
	parameters: {
		controls: {
			exclude: ['kind'],
		},
	},
};
