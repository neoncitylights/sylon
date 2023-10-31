import { Button, type ButtonProps } from './Button';

export type IconButtonProps = Omit<ButtonProps, 'isIconOnly'> & {
	'aria-label': string,
};
export const IconButton = ({ children, ...props }: IconButtonProps) => {
	return (
		<Button isIconOnly {...props}>
			{children}
		</Button>
	);
};
