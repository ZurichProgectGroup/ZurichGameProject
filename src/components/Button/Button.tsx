import React from 'react';
import cn from 'classnames';
import './Button.css';
import type { Props } from './types';

const Button = ({
    children,
    type = 'button',
    className,
    ...otherProps
}: Props) => (
    <button
        type={type}
        className={cn('button', className)}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
