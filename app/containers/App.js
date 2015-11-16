import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';

import '../assets/stylesheets/_bootstrap.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        Hi Will and Alan!
        {this.props.children}
      </div>
    );
  }
});

function select(state) {
  return state;
}

App.propTypes = {
  children: PropTypes.node
};

export default connect(select, { pushState })(App);
