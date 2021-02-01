import { ReactNode, MouseEvent } from 'react';

export type Props = {
    children?: ReactNode,
    className?: string,
    isOpen: boolean,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
};
