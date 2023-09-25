/* eslint @typescript-eslint/no-unused-vars: 0 */

import { ReactNode, useState } from 'react';
import { ButtonProps as HtmlButtonProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

export type ButtonKind = ButtonProps['kind'];
export type ButtonProps = HtmlButtonProps & {
	kind?: 'primary' | 'secondary',
	isIconOnly?: boolean,
};

export const Button = ({
	children,
	className,
	kind = 'primary',
	isIconOnly = false,
	...props
}: ButtonProps) => {
	const styles = twMerge(
		'flex flex-row gap-2',
		'border rounded-md',
		!isIconOnly ? 'px-4 py-2' : 'p-2',
		kind === 'primary' && 'bg-slate-800 border-slate-800 text-white',
		kind === 'secondary' && 'bg-white border-slate-200 text-slate-800',
		className,
	);

	return (
		<button type="button" className={styles} {...props}>
			{children}
		</button>
	);
};

export type IconButtonProps = Omit<ButtonProps, 'isIconOnly'>;
export const IconButton = ({ children, ...props }: IconButtonProps) => {
	return (
		<Button isIconOnly {...props}>
			{children}
		</Button>
	);
};

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
