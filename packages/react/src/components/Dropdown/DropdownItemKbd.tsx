import type { ComponentProps } from 'react';

export type DropdownItemKbdProps = ComponentProps<'span'>;
export const DropdownItemKbd = ({ children }: DropdownItemKbdProps) => {
	return (
		<span className="flex flex-row gap-1 items-center text-slate-500 font-mono">
			{children}
		</span>
	);
};
