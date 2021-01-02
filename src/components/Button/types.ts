import { ButtonHTMLAttributes, ReactNode } from 'react';

export type OwnProps = {
    className?: string,
    type?: 'button' | 'reset' | 'submit',
    children: ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = OwnProps;
