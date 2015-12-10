import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <ReduxRouter />
        </Provider>
      </div>
    );
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
