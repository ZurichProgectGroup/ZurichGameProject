import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Store';
import App from 'Components/App';

import './styles/index.css';

if ('serviceWorker' in navigator) {
    console.log('serviceWorker');
    navigator.serviceWorker.register('/sw.js')
        .then(() => navigator.serviceWorker.ready.then((worker) => {
            worker.sync.register('syncdata');
        }))
        .catch((err) => console.log(err));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.app'),
);
