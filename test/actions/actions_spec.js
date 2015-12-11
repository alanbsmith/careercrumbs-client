import sinon from 'sinon';
import {expect} from 'chai';

import {fetchQuestions} from '../../app/actions/actions';

var server;

beforeEach(function () { 
  server = sinon.fakeServer.create(); 
});

afterEach(function () { 
  server.restore(); 
});

describe("fetchQuestions", function () {
  it('does the right things', () => { // TODO: strucutre tests/descriptions

    // create a dispatch spy
    const dispatch = sinon.spy();
    const action = fetchQuestions();
    // call the fetchQuestions action
    action(dispatch);

      // setup the response from the fake server
    server.respondWith("GET",
      "/v1/questions",
      [200, { "Content-Type": "application/json" }, '[{"id": 12, "comment": "Hey there" }]' ]
    );
    
    // have the server respond
    server.respond();
    console.log('DISPATCH ARGS', dispatch.args);
    console.log('fake server responses, ', server.responses)
    // assert that the right request was made
    sinon.assert.calledWith(dispatch, { type: 'RECEIVE_QUESTIONS' });

    // assert that receieve questions is dispatched wit the right args

  });
});
