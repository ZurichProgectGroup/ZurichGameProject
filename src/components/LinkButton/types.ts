import { ButtonHTMLAttributes, ReactNode } from 'react';

export type OwnProp = {
    className?: string,
    children: ReactNode,
    isButton?: boolean,
    to?: string
};

export type LinkProps = {
    to: string
    isButton?: false
} & OwnProp;

export type ButtonProps = {
    isButton: true,
} & ButtonHTMLAttributes<HTMLButtonElement> & OwnProp;

export type Props = LinkProps | ButtonProps;
