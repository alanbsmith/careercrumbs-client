import 'babel-core/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
