import React from 'react';
import cn from 'classnames';
import type { Props } from './types';
import './Card.css';

const Card = ({
    className = '',
    children,
}: Props) => (
    <div className={cn('card', className)}>
        {children}
    </div>
);

export default Card;
