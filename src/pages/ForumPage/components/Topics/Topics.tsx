import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Title, Loader, PlusButton, NavigationList, ForumTopics,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectTopics } from 'selectors';
import { getTopics } from 'store/topics';
import RouteMap from './const';

const Topics = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { list, isLoading } = useSelector(selectTopics);

    useEffect(() => {
        dispatch(getTopics());
    }, []);

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
                {
                    isLoading ? <Loader />
                        : <ForumTopics topics={list} onThemeClick={handleThemeClick} />
                }
            </div>
        </>
    );
};

export default Topics;
