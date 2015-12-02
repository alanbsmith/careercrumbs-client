import { get } from 'superagent';

export const ASK_QUESTION = 'ASK_QUESTION';
export const REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export function askQuestion({ title, body }) {
  return { type: ASK_QUESTION, title, body };
}

export function fetchQuestions() {
  return dispatch => {
    dispatch(requestQuestions());
    get(`http://api.lvh.me:2020/v1/questions`)
    .type('application/json')
    .accept('application/json')
    .end(function(err, res) {
      if (res.ok) {
        dispatch(receiveQuestions(res.body));
      } else {
        console.log('GET request failed!');
      }
    });
  };
}

function requestQuestions() {
  return { type: REQUEST_QUESTIONS };
}

function receiveQuestions(questions) {
  return { type: RECEIVE_QUESTIONS, questions };
}
