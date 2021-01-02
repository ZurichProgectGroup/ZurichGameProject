import { HTMLAttributes } from 'react';

export type OwnProps = {
    icon?: string,
    className?: string,
    children?: string,
} & HTMLAttributes<HTMLDivElement>;

export type Props = OwnProps;
