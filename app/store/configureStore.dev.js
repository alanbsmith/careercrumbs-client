import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import { createHistory } from 'history';
import routes from '../routes';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({ routes, createHistory }),
  devTools()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
