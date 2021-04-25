import React, { useMemo } from 'react';
import './LinkButton.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { LinkButtonSize } from './types';
import type { Props } from './types';

const LinkButton = (props: Props) => {
    const {
        children,
        className,
        isButton = false,
        to = '',
        size = LinkButtonSize.Large,
        ...otherProps
    } = props;
    const classNames = useMemo(() => cn(
        'link-button',
        {
            'link-button_small': size === LinkButtonSize.Small,
            'link-button_large': size === LinkButtonSize.Large,
        },
        className,
    ), [className, size]);

    if (isButton) {
        return (
            <button className={classNames} type="button" {...otherProps}>
                {children}
            </button>
        );
    }

    return (
        <Link className={classNames} to={to}>
            {children}
        </Link>
    );
};

export default LinkButton;
