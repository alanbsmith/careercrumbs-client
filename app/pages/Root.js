import React, { PropTypes } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const Root = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <App />
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
