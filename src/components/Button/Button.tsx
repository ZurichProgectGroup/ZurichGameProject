import React from 'react';
import './Button.css';
import { Props } from './types';

const Button: Props = (props) => {
    const {
        children,
        ...buttonProps
    } = props;

    return (
        <button type="button" {...buttonProps} className="button">
            {children}
        </button>
    );
};

export default Button;
