import React from 'react';
import './LinkButton.css';
import { Props } from 'components/LinkButton/types';

const LinkButton: Props = (props) => {
    const {
        children,
        ...linkProps
    } = props;

    return (
        <button type="button" className="link-button" {...linkProps}>
            {children}
        </button>
    );
};

export default LinkButton;
