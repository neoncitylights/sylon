import type { ComponentProps } from 'react';

import { DropdownHeading } from './DropdownHeading';

export type DropdownProps = ComponentProps<'nav'>;
export const Dropdown = ({ children }: DropdownProps) => {
	return (
		<nav className="p-1.5 border text-sm rounded-lg shadow shadow-slate-100 w-52">
			<DropdownHeading>Account</DropdownHeading>
			<ul className="flex flex-col gap-1/2">{children}</ul>
		</nav>
	);
};

