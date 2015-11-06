import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  placeholder,
  router
});

function placeholder(state = {}) {
  return state;
}

export default rootReducer;
