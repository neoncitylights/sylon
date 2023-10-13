import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useAnimationFrame = (callbackFn: FrameRequestCallback, args: any[] = []) => {
	useEffect(() => {
		const frame = requestAnimationFrame(callbackFn);
		return () => cancelAnimationFrame(frame);
	}, [callbackFn, ...args]); // eslint-disable-line react-hooks/exhaustive-deps
};
