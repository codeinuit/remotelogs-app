import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import App from './App';

ReactDOM.render(
  <Provider store={configureStore({})}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
