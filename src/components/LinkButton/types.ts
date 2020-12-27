import { LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

export type OwnProps = {
    className?: string,
    children: ReactNode
} & LinkProps;

export type Props = OwnProps;
