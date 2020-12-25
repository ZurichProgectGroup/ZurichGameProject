import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import LeaderboardPage from 'Pages/LeaderboardPage';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/leaderboard" component={LeaderboardPage} />
            <Route component={() => <div>404 placeholder</div>} />
        </Switch>
    </Router>
);

export default App;
