import { ReactNode, useState } from 'react';
import { ButtonProps as HtmlButtonProps } from 'react-html-props';
import { twMerge } from 'tailwind-merge';

export type ButtonKind = NonNullable<ButtonProps['kind']>;
export type ButtonIntent = NonNullable<ButtonProps['intent']>;
export type ButtonProps = HtmlButtonProps & {
	kind?: 'primary' | 'normal' | 'quiet',
	intent?: 'progressive' | 'destructive' | 'default',
	isIconOnly?: boolean,
};

type DependentStyleMap<
	Prop1 extends string,
	Prop2 extends string,
	T
> = Record<Prop1, Record<Prop2 | 'shared', T>>;
type ButtonKindIntentMap = DependentStyleMap<ButtonKind, ButtonIntent, string|string[]>;

const kindIntentStyles: ButtonKindIntentMap = Object.freeze({
	'primary': {
		'shared': 'border text-white',
		'default': 'bg-slate-800 border-slate-800',
		'progressive': 'bg-blue-600 border-blue-600',
		'destructive': 'bg-red-600 border-red-600',
	},
	'normal': {
		'shared': 'border',
		'default': 'text-slate-800 bg-slate-100 border-slate-100',
		'destructive': 'text-red-700 bg-red-100 border-red-100',
		'progressive': 'text-blue-700 bg-blue-100 border-blue-100',
	},
	'quiet': {
		// transparent border to keep size consistent
		// and prevent CLS (cumulative layout shift)
		'shared': 'border border-[transparent]',
		'default': 'text-slate-800',
		'destructive': 'text-red-600',
		'progressive': 'text-blue-600',
	},
});

export const Button = ({
	children,
	className,
	kind = 'primary',
	intent = 'default',
	isIconOnly = false,
	...props
}: ButtonProps) => {
	const styles = twMerge(
		'appearance-none',
		'flex flex-row gap-2',
		'rounded-md',
		'text-base tracking-wide',
		!isIconOnly ? 'px-4 py-2' : 'p-1',
		kindIntentStyles[kind]['shared'],
		kindIntentStyles[kind][intent],
		className,
	);

	return (
		<button type="button" className={styles} {...props}>
			{children}
		</button>
	);
};

export type IconButtonProps = Omit<ButtonProps, 'isIconOnly'> & {
	'aria-label': string,
};
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
