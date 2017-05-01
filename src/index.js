import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
import Routes from './routes';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
