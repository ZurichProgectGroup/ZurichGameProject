import React from 'react';
import './Alert.css';
import type { Props } from './types';

const Alert = (props: Props) => {
    const {
        icon,
        children = '',
        className = 'alert',
        ...alertProps
    } = props;

    return (
        <div {...alertProps} className={className}>
            <img src={icon} alt="" />
            {children}
        </div>
    );
};

export default Alert;
