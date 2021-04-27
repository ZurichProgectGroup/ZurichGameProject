import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum LinkButtonSize {
    Large,
    Small,
}

export type OwnProp = {
    className?: string,
    children: ReactNode,
    isButton?: boolean,
    to?: string,
    size?: LinkButtonSize,
};

export type LinkProps = {
    to: string
    isButton?: false
} & OwnProp;

export type ButtonProps = {
    isButton: true,
} & ButtonHTMLAttributes<HTMLButtonElement> & OwnProp;

export type Props = LinkProps | ButtonProps;
