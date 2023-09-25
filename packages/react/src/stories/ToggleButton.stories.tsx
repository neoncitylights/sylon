import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton } from '../components/';
import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ToggleButton> = {
	title: 'Components/ToggleButton',
	component: ToggleButton,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PlayButton: Story = {
	args: {
		isIconOnly: true,
		contentOn: <IconPlayerPlayFilled size={16} />,
		contentOff: <IconPlayerPauseFilled size={16} />
	},
};
