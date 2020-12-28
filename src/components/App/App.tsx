import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import LeaderboardPage from 'Pages/LeaderboardPage';
import ROUTES from './consts';

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTES.main} component={Home} />
            <Route exact path={ROUTES.leaderboard} component={LeaderboardPage} />
            <Route component={() => <div>404 placeholder</div>} />
        </Switch>
    </Router>
);

export default App;
