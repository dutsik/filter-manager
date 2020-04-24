import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/filteranalog/';

export default [
  <Route path="/filter_analogs/create" component={Create} exact key="create" />,
  <Route path="/filter_analogs/edit/:id" component={Update} exact key="update" />,
  <Route path="/filter_analogs/show/:id" component={Show} exact key="show" />,
  <Route path="/filter_analogs/" component={List} exact strict key="list" />,
  <Route path="/filter_analogs/:page" component={List} exact strict key="page" />
];
