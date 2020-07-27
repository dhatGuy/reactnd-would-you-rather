import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import middleware from "./middlewares"
import reducers from './reducers';
import {Provider} from "react-redux";

const store  = createStore(reducers, middleware)
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
