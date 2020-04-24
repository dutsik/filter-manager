import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/filter/';

export default [
  <Route path="/filters/create" component={Create} exact key="create" />,
  <Route path="/filters/edit/:id" component={Update} exact key="update" />,
  <Route path="/filters/show/:id" component={Show} exact key="show" />,
  <Route path="/filters/" component={List} exact strict key="list" />,
  <Route path="/filters/:page" component={List} exact strict key="page" />
];
