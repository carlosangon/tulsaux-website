import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import TulsaUXApp from './TulsaUXApp';
import configureStore     from './store/configureStore';
import { startSetSpeakers } from './actions/speakers';
import { firebase }       from './utilities/dbConfig';
import './index.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const _tulsaUXApp = (
    <Provider store={store}>
      <TulsaUXApp />
    </Provider>
  )

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(_tulsaUXApp, document.getElementById('root'));
    hasRendered = true;
  }
};

store.dispatch(startSetSpeakers()).then(() => {
  renderApp();
})


// ReactDOM.render(_tulsaUXApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
