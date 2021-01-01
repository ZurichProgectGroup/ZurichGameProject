import { HTMLAttributes } from 'react';

export type OwnProps = {
    icon?: string,
    className?: string,
} & HTMLAttributes<HTMLDivElement>;

export type Props = OwnProps;
