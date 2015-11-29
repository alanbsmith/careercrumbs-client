import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';
import Navbar from '../components/Navbar.js';

import '../assets/stylesheets/_bootstrap.scss';

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

App.propTypes = {
  children: PropTypes.node
};

function select(state) {
  return state;
}

export default connect(select, { pushState })(App);
