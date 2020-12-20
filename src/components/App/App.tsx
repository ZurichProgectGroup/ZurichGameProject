import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Home from 'Pages/Home';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => <div>404 placeholder</div>} />
        </Switch>
    </Router>
);

export default App;
