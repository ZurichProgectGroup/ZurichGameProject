import React from 'react';
import './Alert.css';
import type { Props } from './types';

const Alert = (props: Props) => {
    const {
        icon,
        onClick,
        children='',
        className = 'alert',
        ...alertProps
    } = props;

    return (
        <div {...alertProps} className={className} onClick={onClick}>
          <img src={icon}/>
            {children}
        </div>
    );
};

export default Alert;
