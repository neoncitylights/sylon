import { type DivProps, type InputProps } from 'react-html-props';

export type CheckboxProps = DivProps & {
	id: string,
	name: string,
	label: string,
	ariaLabel: string,
	description?: string,
	ariaDescription?: string,
	inputProps?: InputProps,
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
