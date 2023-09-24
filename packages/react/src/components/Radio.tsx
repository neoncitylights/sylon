import { DivProps, InputProps } from 'react-html-props';

export type RadioProps = DivProps & {
	id: string,
	name: string,
	label: string,
	ariaLabel: string,
	description?: string,
	ariaDescription?: string,
	inputProps?: InputProps,
};

export const Radio = ({
	id,
	name,
	label,
	ariaLabel,
	description,
	ariaDescription = '',
	inputProps,
	...props
}: RadioProps) => {
	return (
		<div {...props}>
			<input
				type="radio"
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
