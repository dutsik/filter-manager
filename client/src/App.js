import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';


// Import your reducers and routes here
import HeaderClient from './components/HeaderClient';
import CarsForm from './components/CarsForm';
import './main.scss'

import { list as getAutoModels } from './actions/automodel/list';
import { list as getAutoBrands } from './actions/autobrand/list'
import { list as getAutoList } from './actions/auto/list'
import { list as getFilterGroups } from './actions/filtergroup/list';
import { list as getFilterList } from './actions/filter/list';

const App = ({
    getAutoModels,
    getAutoBrands,
    getAutoList,
    getFilterGroups,
    getFilterList
}) => {

    useEffect(() => {
        getAutoModels();
        getAutoBrands();
        getAutoList();
        getFilterGroups();
        getFilterList();
    }, []);
    return (
        <>
            <HeaderClient />
            <Switch>    
                <Route path="/auto_types/:id" component={CarsForm} exact/>

                {/* Add your routes here */}
            </Switch>
        </>
    )
}

  
  const mapDispatchToProps = dispatch => ({
      getAutoModels: page => dispatch(getAutoModels(page)),
      getAutoBrands: page => dispatch(getAutoBrands(page)),
      getAutoList: page => dispatch(getAutoList(page)),
      getFilterGroups: page => dispatch(getFilterGroups(page)),
      getFilterList: page => dispatch(getFilterList(page))
  });

export default connect(null, mapDispatchToProps)(App);