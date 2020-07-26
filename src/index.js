import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { users } from "./reducers/users"
import { createStore } from 'redux';
import middleware from "./middlewares"
import reducers from './reducers';
import {Provider} from "react-redux";

const store  = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
