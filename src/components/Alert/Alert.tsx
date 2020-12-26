import React from 'react';
import './Alert.css';
import { Props } from './types';

const Alert: Props = (props) => {
    const {
        icon,
        onClick,
        children,
        ...alertProps
    } = props;

    return (
        <div {...alertProps} className="alert" onClick={onClick}>
          <img src={icon}></img>
            {children}
        </div>
    );
};

export default Alert;
