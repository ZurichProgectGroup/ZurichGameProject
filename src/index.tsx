import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from 'Store';
import App from 'Components/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app'),
);
