import { MouseEventHandler } from 'react';

export type OwnProp = {
    onClick: MouseEventHandler;
    className?: string;
    isFullscreen: boolean;
};

export type Props = OwnProp;
