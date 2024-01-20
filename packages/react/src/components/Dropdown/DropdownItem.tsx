import type { ComponentProps } from 'react';

export type DropdownItemProps = ComponentProps<'li'>;
export const DropdownItem = ({ children }: DropdownItemProps) => {
	return (
		<li className="flex flex-row justify-between items-center p-1.5 px-3 rounded hover:bg-slate-200 transition-colors ease-in-out cursor-pointer">
			{children}
		</li>
	);
};
