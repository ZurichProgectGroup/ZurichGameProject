import React from 'react';
import './ForumPage.css';
import {
    Route, Switch, useRouteMatch,
} from 'react-router-dom';
import ROUTES from 'components/App/consts';
import { useSelector } from 'react-redux';
import { selectUser } from 'selectors';
import { LinkButton } from 'components';
import Topics from './components/Topics';
import Forum from './components/Forum';
import ForumCreate from './components/ForumCreate';

const ForumPage = () => {
    const { path } = useRouteMatch();

    const { user } = useSelector(selectUser);

    return (
        <div className="forum-page">
            <div className="forum-page__container">
                {
                    (!user && <LinkButton to={ROUTES.login}>Go to login</LinkButton>) || (
                        <Switch>
                            <Route exact path={path} component={Topics} />
                            <Route exact path={`${path}/create`} component={ForumCreate} />
                            <Route path={`${path}/:id`} component={Forum} />
                        </Switch>
                    )
                }
            </div>
        </div>
    );
};

export default ForumPage;
