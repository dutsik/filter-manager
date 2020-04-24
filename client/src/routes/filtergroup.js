import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/filtergroup/';

export default [
  <Route path="/filter_groups/create" component={Create} exact key="create" />,
  <Route path="/filter_groups/edit/:id" component={Update} exact key="update" />,
  <Route path="/filter_groups/show/:id" component={Show} exact key="show" />,
  <Route path="/filter_groups/" component={List} exact strict key="list" />,
  <Route path="/filter_groups/:page" component={List} exact strict key="page" />
];
