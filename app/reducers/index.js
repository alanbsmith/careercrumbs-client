import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

function questions(state = [], action) {
  if (action.type === 'ASK_QUESTION') {
    return state.concat([{ title: action.title, body: action.body }]);
  } else if (action.type === 'RECEIVE_QUESTIONS') {
    return state.concat(action.questions);
  }

  return state;
}

const rootReducer = combineReducers({
  questions,
  router
});

export default rootReducer;
