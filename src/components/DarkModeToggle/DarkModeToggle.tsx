import React, { useCallback, useEffect } from 'react';
import Toggle from 'react-toggle';
import { ThemeEnum } from 'types/Theme';
import { useDispatch } from 'react-redux';
import { setUsersTheme } from 'store/account';
import type { Props } from './types';
import './DarkModeToggle.css';

const DarkModeToggle = ({ theme }: Props) => {
    const isLightTheme = theme.id === ThemeEnum.light;
    const dispatch = useDispatch();

    const setTheme = useCallback(({ target: { checked } }) => {
        const themeId = checked ? ThemeEnum.light : ThemeEnum.dark;

        dispatch(setUsersTheme(themeId));
    }, []);

    useEffect(() => {
        if (isLightTheme) {
            document.documentElement.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
        } else {
            document.documentElement.style.removeProperty('filter');
        }
    }, [isLightTheme]);

    return (
        <Toggle
            checked={isLightTheme}
            onChange={setTheme}
            icons={{ checked: '🌙', unchecked: '🔆' }}
            aria-label="Dark mode"
        />
    );
};

export default DarkModeToggle;
