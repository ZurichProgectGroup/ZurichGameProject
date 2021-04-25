import React from 'react';
import './ForumPage.css';
import {
    Route, Switch, useRouteMatch,
} from 'react-router-dom';
import ROUTES from 'Components/App/consts';
import { useSelector } from 'react-redux';
import { selectUser } from 'Selectors';
import { LinkButton } from 'Components';
import Topics from './components/Topics';
import Forum from './components/Forum';
import ForumCreate from './components/ForumCreate';

const ForumPage = () => {
    const { path } = useRouteMatch();

    const userData = useSelector(selectUser);

    return (
        <div className="forum-page">
            <div className="forum-page__container">
                {
                    (!userData && <LinkButton to={ROUTES.login}>Go to login</LinkButton>) || (
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
