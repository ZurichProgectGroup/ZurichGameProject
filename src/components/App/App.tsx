import React, { useEffect } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import Account from 'Pages/Account';
import ErrorPage from 'Pages/ErrorPage';
import ForumPage from 'Pages/ForumPage';
import LeaderboardPage from 'Pages/LeaderboardPage';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import { useDispatch } from 'react-redux';
import { getUser } from 'Store/account';
import ErrorBoundary from 'Components/ErrorBoundary';
import GamePage from 'Pages/GamePage';
import ROUTES from './consts';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    });

    return (
        <ErrorBoundary>
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
