import { ComponentProps } from 'react';

export type DropdownHeadingProps = ComponentProps<'h2'>;
export const DropdownHeading = ({ children }: DropdownHeadingProps) => {
	return (
		<h2 className="p-1.5 px-3 uppercase text-xs text-slate-500">{children}</h2>
	);
};
