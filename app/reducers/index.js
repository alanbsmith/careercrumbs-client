import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  questions,
  router
});

function questions(state = { questions: [] }, action) {
  if (action.type === 'ASK_QUESTION') {
    return Object.assign({}, state, {
      questions: state.questions.concat([{ title: action.title, body: action.body }])
    });
  }

  return state;
}

export default rootReducer;
