import React from 'react';
import './ActionLink.css';
import type { Props } from './types';

const ActionLink = ({
    className = 'link-button',
    children,
    ...linkProps
}
: Props) => (
    <a className={className} {...linkProps}>
        {children}
    </a>
);

export default ActionLink;
