import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTimeout = (callbackFn: () => void, milliseconds: number = 1000, args: any[] = []) => {
	useEffect(() => {
		const time = setTimeout(callbackFn, milliseconds);
		return () => clearTimeout(time);
	}, args)
}
