import React from 'react';
import cn from 'classnames';
import './Button.css';
import { ButtonSize, ButtonVariant } from './types';
import type { Props } from './types';

const Button = ({
    children,
    type = 'button',
    size = ButtonSize.Small,
    variant = ButtonVariant.Transparent,
    className,
    ...otherProps
}: Props) => (
    <button
        type={type}
        className={cn(
            'button',
            {
                button_small: size === ButtonSize.Small,
                button_large: size === ButtonSize.Large,
                button_transparent: variant === ButtonVariant.Transparent,
                button_filled: variant === ButtonVariant.Filled,
            },
            className,
        )}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
