import React from 'react';
import cn from 'Utils/classnames';
import { Props } from './types';
import './Title.css';

const Title: Props = (
    {
        text,
        className = '',
    },
) => (
    <h2 className={cn('title', className)}>{text}</h2>
);

export default Title;
