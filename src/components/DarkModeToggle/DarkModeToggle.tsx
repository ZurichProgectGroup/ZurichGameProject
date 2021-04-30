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
            document.documentElement.classList.add('inverted');
        } else {
            document.documentElement.classList.remove('inverted');
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
