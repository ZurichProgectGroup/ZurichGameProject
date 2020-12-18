import { FC } from 'react';

export type OwnProps = {
    url?: string,
    name: string,
    hasChange?: boolean,
    small?: boolean,
    medium?: boolean,
    onChange?: (id: string) => {}
};

export type Props = FC<OwnProps>;
