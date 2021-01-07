import { ButtonHTMLAttributes, ReactNode } from 'react';

export const enum ButtonSize {
    Large,
    Small,
}

export const enum ButtonVariant {
    Transparent,
    Filled,
}

export type OwnProps = {
    className?: string,
    type?: 'button' | 'reset' | 'submit',
    variant?: ButtonVariant,
    size?: ButtonSize,
    children: ReactNode,
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = OwnProps;
