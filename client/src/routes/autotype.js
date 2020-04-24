import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/autotype/';

export default [
  <Route path="/auto_types/create" component={Create} exact key="create" />,
  <Route path="/auto_types/edit/:id" component={Update} exact key="update" />,
  <Route path="/auto_types/show/:id" component={Show} exact key="show" />,
  <Route path="/auto_types/" component={List} exact strict key="list" />,
  <Route path="/auto_types/:page" component={List} exact strict key="page" />
];
