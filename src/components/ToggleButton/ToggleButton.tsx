import React from 'react';
import cn from 'classnames';
import type { Props } from './types';
import './ToggleButton.css';

const ToggleButton = ({
    children = '',
    isOpen,
    onClick,
    className = '',
}: Props) => (
    <button
        type="button"
        className={cn('toggle-button', {
            'toggle-button_open': !isOpen,
        }, className)}
        onClick={onClick}
    >
        <span>{children}</span>
    </button>
);

export default ToggleButton;
