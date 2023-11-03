import { type ComponentProps } from 'react';

export type CalloutKind = CalloutProps['kind'];
export type CalloutProps = ComponentProps<'div'> & {
	kind: 'info' | 'success' | 'warning' | 'error',
};
export const Callout = ({children, className, ...props}: CalloutProps) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	);
};
