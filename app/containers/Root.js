import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <ReduxRouter />
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
