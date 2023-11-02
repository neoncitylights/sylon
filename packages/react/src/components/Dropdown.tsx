import { type ComponentProps } from 'react';

export type DropdownProps = ComponentProps<'nav'>;
export const Dropdown = ({ children }: DropdownProps) => {
	return (
		<nav className="p-1.5 border text-sm rounded-lg shadow shadow-slate-100 w-52">
			<DropdownHeading>Account</DropdownHeading>
			<ul className="flex flex-col gap-1/2">{children}</ul>
		</nav>
	);
};

export type DropdownHeadingProps = ComponentProps<'h2'>;
export const DropdownHeading = ({ children }: DropdownHeadingProps) => {
	return (
		<h2 className="p-1.5 px-3 uppercase text-xs text-slate-500">{children}</h2>
	);
};

export type DropdownItemProps = ComponentProps<'li'>;
export const DropdownItem = ({ children }: DropdownItemProps) => {
	return (
		<li className="flex flex-row justify-between items-center p-1.5 px-3 rounded hover:bg-slate-200 transition-colors ease-in-out cursor-pointer">
			{children}
		</li>
	);
};

export type DropdownItemKbdProps = ComponentProps<'span'>;
export const DropdownItemKbd = ({ children }: DropdownItemKbdProps) => {
	return (
		<span className="flex flex-row gap-1 items-center text-slate-500 font-mono">
			{children}
		</span>
	);
};
