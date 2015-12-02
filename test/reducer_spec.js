import {expect} from 'chai';
import rootReducer from '../app/reducers/index';

describe('questions reducer', () => {

  it('handles ASK_QUESTION', () => {
    const initialState = {};
    const action = {
      type: 'ASK_QUESTION',
      title: 'How do you herd goats?',
      body: 'Asking for a friend'
    }
    const nextState = rootReducer(initialState, action);
    expect(nextState).to.include.keys('questions', 'router');
    expect(nextState.questions).to.deep.equal(
      [
        {
          title: 'How do you herd goats?',
          body: 'Asking for a friend'
        }
      ]
    );
  });
});
