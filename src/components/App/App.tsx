import React, { useEffect } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'pages/Home';
import Account from 'pages/Account';
import ErrorPage from 'pages/ErrorPage';
import ForumPage from 'pages/ForumPage';
import LeaderboardPage from 'pages/LeaderboardPage';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { checkUserOnStart } from 'store/account';
import ErrorBoundary from 'components/ErrorBoundary';
import GamePage from 'pages/GamePage';
import PageMeta from 'components/PageMeta';
import { locationParams } from 'utils/urlUtils';
import ROUTES from './consts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserOnStart(locationParams));
    });

    return (
        <ErrorBoundary>
            <PageMeta />
            <Switch>
                <Route exact path={ROUTES.main} component={Home} />
                <Route exact path={ROUTES.account} component={Account} />
                <Route exact path={ROUTES.game} component={GamePage} />
                <Route exact path={ROUTES.login} component={Login} />
                <Route exact path={ROUTES.register} component={Register} />
                <Route exact path={ROUTES.leaderboard} component={LeaderboardPage} />
                <Route path={ROUTES.forum} component={ForumPage} />
                <Route component={ErrorPage} />
            </Switch>
        </ErrorBoundary>
    );
};

export default App;
