import { LIProps, H2Props, NavProps, SpanProps } from "react-html-props";

export type DropdownProps = NavProps;
export const Dropdown = ({ children }: DropdownProps) => {
	return (
		<nav className="p-1.5 border text-sm rounded-lg shadow shadow-slate-100 w-52">
			<DropdownHeading>Account</DropdownHeading>
			<ul className="flex flex-col gap-1/2">{children}</ul>
		</nav>
	);
};

export type DropdownHeadingProps = H2Props;
export const DropdownHeading = ({ children }: DropdownHeadingProps) => {
	return (
		<h2 className="p-1.5 px-3 uppercase text-xs text-slate-500">{children}</h2>
	);
};

export type DropdownItemProps = LIProps;
export const DropdownItem = ({ children }: DropdownItemProps) => {
	return (
		<li className="flex flex-row justify-between items-center p-1.5 px-3 rounded hover:bg-slate-200 transition-colors ease-in-out cursor-pointer">
			{children}
		</li>
	);
};

export type DropdownItemKbdProps = SpanProps;
export const DropdownItemKbd = ({ children }: DropdownItemKbdProps) => {
	return (
		<span className="flex flex-row gap-1 items-center text-slate-500 font-mono">
			{children}
		</span>
	);
};
