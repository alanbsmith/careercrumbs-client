import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import QuestionsPage from './containers/QuestionsPage';
import DiscoveryPage from './containers/DiscoveryPage';
import AskPage from './containers/AskPage';

export default (
  <Route path="/" component={App}>
    <Route path="discovery" component={DiscoveryPage} />
    <Route path="questions" component={QuestionsPage} />
    <Route path="ask" component={AskPage} />
  </Route>
);
