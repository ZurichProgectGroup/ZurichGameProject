import React, { useMemo } from 'react';
import './LinkButton.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import type { Props } from 'components/LinkButton/types';

const LinkButton = (props: Props) => {
    const {
        children,
        className,
        isButton = false,
        to = '',
        ...otherProps
    } = props;
    const classNames = useMemo(() => cn('link-button', className), [className]);

    if (isButton) {
        return (
            <button className={classNames} type="button" {...otherProps}>
                {children}
            </button>
        );
    }

    return (
        <Link className={cn('link-button', className)} to={to}>
            {children}
        </Link>
    );
};

export default LinkButton;
