import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/auto/';

export default [
  <Route path="/autos/create" component={Create} exact key="create" />,
  <Route path="/autos/edit/:id" component={Update} exact key="update" />,
  <Route path="/autos/show/:id" component={Show} exact key="show" />,
  <Route path="/autos/" component={List} exact strict key="list" />,
  <Route path="/autos/:page" component={List} exact strict key="page" />
];
