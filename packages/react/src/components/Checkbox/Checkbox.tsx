import type { ComponentProps } from 'react';

export type CheckboxProps = ComponentProps<'div'> & {
	id: string,
	name: string,
	label: string,
	ariaLabel: string,
	description?: string,
	ariaDescription?: string,
	inputProps?: ComponentProps<'input'>,
};

export const Checkbox = ({
	id,
	name,
	label,
	ariaLabel,
	description,
	ariaDescription = '',
	inputProps,
	...props
}: CheckboxProps) => {
	return (
		<div {...props}>
			<input
				type="checkbox"
				id={id}
				name={name}
				aria-labelledby={ariaLabel}
				aria-describedby={ariaDescription}
				{...inputProps} />
			<label htmlFor={id}>
				<span id={ariaLabel}>{label}</span>
				{description && <span id={ariaDescription}>{description}</span>}
			</label>
		</div>
	);
};
