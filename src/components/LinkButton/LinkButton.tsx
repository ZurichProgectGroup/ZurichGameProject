import React from 'react';
import './LinkButton.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import type { Props } from 'components/LinkButton/types';

const LinkButton = ({ children, className, ...linkProps }: Props) => (
    <Link className={cn('link-button', className)} {...linkProps}>
        {children}
    </Link>
);

export default LinkButton;
