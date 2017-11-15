import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

// const addLoggingToDispatch = (store) => {
//   return function(next) {
//     return function(action) {
//       console.log(store.getState());
//       console.log(action);
//       next(action);
//       console.log(store.getState());
//       next(action);
//     }
//   }
// };

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState);
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
