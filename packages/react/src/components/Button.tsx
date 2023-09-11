import { ButtonProps as HtmlButtonProps } from "react-html-props";
import { twMerge } from "tailwind-merge";

export type ButtonKind = ButtonProps["kind"];
export type ButtonProps = HtmlButtonProps & {
	kind?: "primary" | "secondary";
};

export const Button = ({
	children,
	className,
	kind,
	...props
}: ButtonProps) => {
	const cssClasses = twMerge(
		"flex flex-row gap-2 px-4 py-2 border border-gray-200 rounded-md",
		className
	);

	return (
		<button className={cssClasses} {...props}>
			{children}
		</button>
	);
};

export const IconButton = ({ children, ...props }: ButtonProps) => {
	return (
		<Button className="px-2" {...props}>
			{children}
		</Button>
	);
};
