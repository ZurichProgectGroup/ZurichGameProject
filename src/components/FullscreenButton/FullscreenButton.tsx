import React from 'react';
import './FullscreenButton.css';
import cn from 'classnames';
import type { Props } from './types';

const FullscreenButton = ({
    isFullscreen,
    onClick,
    className = '',
}: Props) => (
    <button
        type="button"
        onClick={onClick}
        className={cn(
            'fullscreen-button',
            isFullscreen ? 'fullscreen-button_close' : 'fullscreen-button_open',
            className,
        )}
    >
        {isFullscreen ? 'close' : 'open'}
    </button>
);

export default FullscreenButton;
