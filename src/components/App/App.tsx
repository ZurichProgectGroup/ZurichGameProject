import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import Account from 'Pages/Account';
import ErrorPage from 'Pages/ErrorPage';
import LeaderboardPage from 'Pages/LeaderboardPage';
import ForumPage from 'Pages/ForumPage';
import Login from 'Pages/Login';
import Register from 'Pages/Register';
import GamePage from 'Pages/GamePage';
import ROUTES from './consts';

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTES.main} component={Home} />
            <Route exact path={ROUTES.account} component={Account} />
            <Route exact path={ROUTES.game} component={GamePage} />
            <Route exact path={ROUTES.leaderboard} component={LeaderboardPage} />
            <Route exact path={ROUTES.login} component={Login} />
            <Route exact path={ROUTES.register} component={Register} />
            <Route exact path={ROUTES.leaderboard} component={LeaderboardPage} />
            <Route path={ROUTES.forum} component={ForumPage} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
);

export default App;
