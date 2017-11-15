import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
