import React from 'react';
import './ActionLink.css';
import type { Props } from './types';

const ActionLink = ({
    className ="link-button",
    children,
    onClick,
    ...linkProps }
    : Props) => (
     <a className={className} {...linkProps} onClick={onClick}>
     {children}
     </a>
);

export default ActionLink;
