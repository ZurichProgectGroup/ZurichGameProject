import React, { useCallback } from 'react';
import './ForumTopics.css';
import ForumTopic from 'components/ForumTopic';
import { OwnProps as Props } from './types';

const ForumTopics = ({ topics = [], onThemeClick }: Props) => {
    const handleThemeClick = useCallback(
        (id: number) => () => onThemeClick && onThemeClick(id),
        [onThemeClick],
    );

    return (
        <div className="forum-themes">
            {
                topics.map((theme) => (
                    <ForumTopic
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

export default ForumTopics;
