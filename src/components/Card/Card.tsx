import React from 'react';
import cn from 'Utils/classnames';
import { Props } from './types';
import './Card.css';

const Card: Props = (props) => {
    const {
        className = '',
        children,
    } = props;

    return (
        <div className={cn('card', className)}>
            {children}
        </div>
    );
};

export default Card;
