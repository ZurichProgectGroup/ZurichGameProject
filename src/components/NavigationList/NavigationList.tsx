import React from 'react';
import cn from 'classnames';
import LinkButton from 'components/LinkButton';
import type { Props } from './types';
import './NavigationList.css';

const NavigationList = ({ className = '', routes }: Props) => (
    <nav className={cn('navigation-list', className)}>
        {
            Object.entries(routes).map(([route, routeName]) => (
                <LinkButton
                    to={route}
                    className="navigation-list__item"
                    key={`NavigationList_${routeName}`}
                >

                    {routeName}
                </LinkButton>
            ))
        }
    </nav>
);

export default NavigationList;
