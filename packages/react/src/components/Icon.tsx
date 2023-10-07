import { TablerIconsProps } from '@tabler/icons-react';
import { lazy } from 'react';

type RemovePrefix<K, Lit extends string> = K extends `${Lit}${infer P}` ? P : K;
type TablerIconMap = Omit<typeof import('@tabler/icons-react'), 'createReactComponent' | 'TablerIconProps'>;
type TablerIconName = RemovePrefix<keyof TablerIconMap, 'Icon'>;

export type IconMap = TablerIconMap;
export type IconName = TablerIconName;
export type IconProps = TablerIconsProps & {
	name: IconName,
};

export const Icon = ({name, ...props}: IconProps) => {
	const IconSvg = lazy(async () =>
		import('@tabler/icons-react')
			.then((module: any) => module[`Icon${name}`]),
	);

	return (
		<IconSvg {...props} />
	);
};
