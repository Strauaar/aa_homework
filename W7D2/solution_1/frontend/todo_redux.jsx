import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

const addLoggingToDispatch = (store) => {
  console.log("in function that has store as argument");
  return function(next) {
    console.log("in function that has next has argument");
    console.log(`next: ${next}`);
    return function(action) {
      console.log("1st middleware, old state:");
      // console.log(store.getState());
      // console.log(action);
      // console.log('invoking action (1st in 1st)...');
      // next(action);
      // console.log("1st middleware, new state");
      // console.log(store.getState());
      // console.log('invoking action (2nd in 1st)...');
      next(action);
    }
  }
};

const anotherLogger = (store) => {
  return function(next) {
    return function(action) {
      console.log(`2nd middleware, old state:`);
      // console.log(store.getState());
      // console.log('invoking action (1st in 2nd)...');
      // next(action);
      // console.log(`2nd middleware, new state:`);
      // console.log(store.getState());
      // console.log('invoking action (2nd in 2nd)...');

      // next(action);
    }
  }
};

const applyMiddlewares = (store, ...middlewares) => {
  console.log("first in applyMiddlewares");
  let dispatch = store.dispatch;
  middlewares.forEach( (middleware) => {
    console.log("in middleware loop");

    dispatch = middleware(store)(dispatch);
    console.log(`still in loop: dispatch: ${dispatch}`);
  });
  console.log(Object.assign({}, store, { dispatch }));
  return Object.assign({}, store, { dispatch });
}

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);

  store = applyMiddlewares(store, addLoggingToDispatch, anotherLogger);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
