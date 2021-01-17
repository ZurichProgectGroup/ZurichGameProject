import { MouseEventHandler } from 'react';

export type OwnProp = {
    onClick: MouseEventHandler,
    className?: string
};

export type Props = OwnProp;
