import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getStore from 'store';
import App from 'components/App';
import 'react-toggle/style.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(() => navigator.serviceWorker.ready.then((worker) => {
            worker.sync.register('syncdata');
        }))
        .catch((err) => console.log(err));
}

// eslint-disable-next-line no-underscore-dangle
const { state } = window.__INITIAL_STATE__;

const store = getStore(state);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector('.app'),
);
