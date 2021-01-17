import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'Components/Game';
import './styles/index.css';
import { Provider } from 'react-redux'
import store from 'Store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app'),
)
