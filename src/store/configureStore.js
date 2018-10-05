import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import speakersReducer from '../reducers/speakers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
    combineReducers({
      speakers: speakersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  
  return store;
  
}