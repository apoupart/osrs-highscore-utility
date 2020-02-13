import { createStore } from 'redux';
import rootReducer from '../reducers/user-reducer';

export default createStore(
  rootReducer,
  undefined,
  (<any>window).devToolsExtension ? (<any>window).devToolsExtension() : f => f
);
