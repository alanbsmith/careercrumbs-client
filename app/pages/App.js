import React from 'react';
import { connect } from 'react-redux';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>Hi Will and Alan!</div>
    );
  }
});

function select(state) {
  return state;
}

export default connect(select)(App);
