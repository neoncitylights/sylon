'use client';

import { type ReactNode, useState } from 'react';

import { Button, type ButtonProps } from './Button';

export type ToggleButtonProps = Omit<ButtonProps, 'children'> & {
	contentOn: ReactNode,
	contentOff: ReactNode,
};
export const ToggleButton = ({ contentOn, contentOff, ...props }: ToggleButtonProps) => {
	const [selected, setSelected] = useState(true);

	return (
		<Button
			role='checkbox'
			aria-checked={selected}
			onClick={() => setSelected(selected => !selected)}
			{...props}
		>
			{selected
				? contentOn
				: contentOff}
		</Button>
	);
};
