import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';
import ErrorPage from 'Pages/ErrorPage';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
);

export default App;
