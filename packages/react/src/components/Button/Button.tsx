import { type ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonKind = NonNullable<ButtonProps['kind']>;
export type ButtonIntent = NonNullable<ButtonProps['intent']>;
export type ButtonSize = NonNullable<ButtonProps['size']>;
export type ButtonProps = ComponentProps<'button'> & {
	kind?: 'primary' | 'normal' | 'quiet',
	intent?: 'progressive' | 'destructive' | 'default',
	size?: 'sm' | 'md',
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

type PaddingStyleMap = DependentStyleMap<ButtonSize, 'isIcon'|'isNotIcon', string|string[]>;
const paddingStyles: PaddingStyleMap = Object.freeze({
	'sm': {
		'shared': '',
		'isIcon': 'px-3 py-1',
		'isNotIcon': 'p-1',
	},
	'md': {
		'shared': '',
		'isIcon': 'px-4 py-2',
		'isNotIcon': 'p-2',
	},
});

export const Button = ({
	children,
	className,
	size = 'md',
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
		paddingStyles[size][isIconOnly ? 'isIcon' : 'isNotIcon'],
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
