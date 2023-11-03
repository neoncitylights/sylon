import type { Meta, StoryObj } from '@storybook/react';
import { IconPlaceholder } from '@tabler/icons-react';

import { IconButton } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
	title: 'Components/IconButton',
	component: IconButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const SimpleIcon: Story = {
	args: {
		children: <IconPlaceholder size={16} />,
	},
	parameters: {
		controls: {
			exclude: ['children'],
		},
	},
};
