import React from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';
import { Props } from 'components/LinkButton/types';

const LinkButton: Props = (props) => {
    const {
        children,
        ...linkProps
    } = props;

    return (
        <Link className="link-button" {...linkProps}>
            {children}
        </Link>
    );
};

export default LinkButton;
