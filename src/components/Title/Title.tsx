import React from 'react';
import cn from 'classnames';
import type { Props } from './types';
import './Title.css';

const Title = (
    {
        text,
        className = '',
        tagName: TagName = 'b',
    } : Props,
) => (
    <TagName className={cn('title', className)}>{text}</TagName>
);

export default Title;
