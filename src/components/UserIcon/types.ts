import { FC } from 'react';

export type OwnProps = {
    url?: string,
    name: string,
    hasChange?: boolean,
    size?: 'small' | 'medium',
    hideBorder?: boolean,
    onChange?: (id: string) => unknown
};

export type Props = FC<OwnProps>;