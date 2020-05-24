import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';

import App from './App';

import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';

import automodel from './reducers/automodel/';
import autotype from './reducers/autotype/';
import autobrand from './reducers/autobrand/';
import filtergroup from './reducers/filtergroup';
import filter from './reducers/filter';
import auto from './reducers/auto/';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({
    router: connectRouter(history),
    form,
    automodel,
    autotype,
    autobrand,
    auto,
    filtergroup,
    filter

    /* Add your reducers here */
  }),
  applyMiddleware(routerMiddleware(history), thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


