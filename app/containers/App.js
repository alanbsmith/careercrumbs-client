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

function select(state) {
  return state;
}

App.propTypes = {
  children: PropTypes.node
};

export default connect(select, { pushState })(App);
