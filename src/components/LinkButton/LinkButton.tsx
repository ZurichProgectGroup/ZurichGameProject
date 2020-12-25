import React from 'react';
import './LinkButton.css';
import cn from 'Utils/classnames';
import { Link } from 'react-router-dom';
import { Props } from 'components/LinkButton/types';

const LinkButton: Props = (props) => {
    const {
        children,
        className = '',
        ...linkProps
    } = props;

    return (
        <Link className={cn('link-button', className)} {...linkProps}>
            {children}
        </Link>
    );
};

export default LinkButton;
