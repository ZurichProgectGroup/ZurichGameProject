import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ForumThemes from 'Components/ForumThemes';
import NavigationList from 'Components/NavigationList';
import PlusButton from 'Components/PlusButton';
import Title from 'Components/Title';
import { forumThemes } from 'Mocks/forum';
import RouteMap from './const';

const Themes = () => {
    const history = useHistory();

    const handleAddNewTheme = useCallback(() => {
        history.push(`${history.location.pathname}/create`);
    }, []);

    const handleThemeClick = useCallback((themeId) => {
        history.push(`${history.location.pathname}/${themeId}`);
    }, []);

    return (
        <>
            <div className="forum-page__header">
                <NavigationList routes={RouteMap} />
                <Title text="Forum" />
                <PlusButton onClick={handleAddNewTheme} className="forum-page__add" />
            </div>
            <div className="forum-page__content">
                <ForumThemes themes={forumThemes} onThemeClick={handleThemeClick} />
            </div>
        </>
    );
};

export default Themes;
