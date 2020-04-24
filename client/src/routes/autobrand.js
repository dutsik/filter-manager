import React from 'react';
import { Route } from 'react-router-dom';
import { List, Create, Update, Show } from '../components/autobrand/';

export default [
  <Route path="/auto_brands/create" component={Create} exact key="create" />,
  <Route path="/auto_brands/edit/:id" component={Update} exact key="update" />,
  <Route path="/auto_brands/show/:id" component={Show} exact key="show" />,
  <Route path="/auto_brands/" component={List} exact strict key="list" />,
  <Route path="/auto_brands/:page" component={List} exact strict key="page" />
];
