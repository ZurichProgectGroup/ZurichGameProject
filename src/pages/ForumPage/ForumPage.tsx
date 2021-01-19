import React from 'react';
import './ForumPage.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Themes from './components/Themes';
import Forum from './components/Forum';
import ForumCreate from './components/ForumCreate';

const ForumPage = () => {
    const { path } = useRouteMatch();

    return (
        <div className="forum-page">
            <div className="forum-page__container">
                <Switch>
                    <Route exact path={path} component={Themes} />
                    <Route exact path={`${path}/create`} component={ForumCreate} />
                    <Route path={`${path}/:id`} component={Forum} />
                </Switch>
            </div>
        </div>
    );
};

export default ForumPage;
