import { DivProps } from 'react-html-props';

export type CalloutKind = CalloutProps['kind'];
export type CalloutProps = DivProps & {
	kind: 'info' | 'success' | 'warning' | 'error',
}
export const Callout = ({children, className, ...props}: CalloutProps) => {
	return (
		<div className={className} {...props}>
			{children}
		</div>
	)
}
