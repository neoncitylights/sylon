import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useInterval = (callbackFn: () => void, milliseconds: number = 1000, args: any[] = []) => {
	useEffect(() => {
		const int = setInterval(callbackFn, milliseconds);
		return () => clearInterval(int);
	}, args)
}
