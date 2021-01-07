import { ReactNode, MouseEvent } from 'react';

export type OwnProps = {
    className?: string,
    children: ReactNode,
    onClick: (event: MouseEvent<HTMLElement>) => void
};

export type Props = OwnProps;
