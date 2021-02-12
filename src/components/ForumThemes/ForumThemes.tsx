import React, { useCallback } from 'react';
import './ForumThemes.css';
import ForumTheme from 'Components/ForumTheme';
import { OwnProps as Props } from './types';

const ForumThemes = ({ themes, onThemeClick }: Props) => {
    const handleThemeClick = useCallback(
        (id: number) => () => onThemeClick && onThemeClick(id),
        [onThemeClick],
    );

    return (
        <div className="forum-themes">
            {
                themes.map((theme) => (
                    <ForumTheme
                        className="forum-themes__item"
                        theme={theme}
                        key={`forum-themes_${theme.id}`}
                        onClick={onThemeClick && handleThemeClick(theme.id)}
                    />
                ))
            }
        </div>
    );
};

export default ForumThemes;
