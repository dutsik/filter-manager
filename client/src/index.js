import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  ConnectedRouter,
  connectRouter,
  routerMiddleware
} from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import * as serviceWorker from './serviceWorker';
// Import your reducers and routes here
import HeaderClient from './components/HeaderClient';
import CarsForm from './components/CarsForm';
import App from './App';
import './main.scss'



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
      <HeaderClient />
      <Switch>
        <Route path="/auto_types/:id" component={CarsForm} exact />
        {/* Add your routes here */}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
