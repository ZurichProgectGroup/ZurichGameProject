import { FC, HTMLAttributes } from 'react';

export type OwnProps = {
    icon?: string;
    visible?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export type Props = FC<OwnProps>;
