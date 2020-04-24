import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/filtertype/';

export default [
  <Route path="/filter_types/create" component={Create} exact key="create" />,
  <Route path="/filter_types/edit/:id" component={Update} exact key="update" />,
  <Route path="/filter_types/show/:id" component={Show} exact key="show" />,
  <Route path="/filter_types/" component={List} exact strict key="list" />,
  <Route path="/filter_types/:page" component={List} exact strict key="page" />
];
