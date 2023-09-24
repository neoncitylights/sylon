import type { Meta, StoryObj } from '@storybook/react';
import { IconCommand } from '@tabler/icons-react';

import { Dropdown, DropdownItem, DropdownItemKbd } from '../components/';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Dropdown> = {
	title: 'Components/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
	args: {
		children: <>
			<DropdownItem>
						Item 1
				<DropdownItemKbd>
					<IconCommand width={12} height={12} />F
				</DropdownItemKbd>
			</DropdownItem>
			<DropdownItem>
						Item 2
				<DropdownItemKbd>
					<IconCommand width={12} height={12} />G
				</DropdownItemKbd>
			</DropdownItem>
			<DropdownItem>Item 3</DropdownItem>
		</>,
	},
};
