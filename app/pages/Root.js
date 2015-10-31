import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

const Root = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
});

export default Root;
