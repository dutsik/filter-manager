import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/automodel/';

export default [
  <Route path="/auto_models/create" component={Create} exact key="create" />,
  <Route path="/auto_models/edit/:id" component={Update} exact key="update" />,
  <Route path="/auto_models/show/:id" component={Show} exact key="show" />,
  <Route path="/auto_models/" component={List} exact strict key="list" />,
  <Route path="/auto_models/:page" component={List} exact strict key="page" />
];
