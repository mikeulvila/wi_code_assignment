import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TodosIndex from './components/todos_index';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={TodosIndex} />
  </Route>
);
