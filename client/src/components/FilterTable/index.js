import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { connect } from 'react-redux';
import { list as listFilterGroup } from '../../actions/filtergroup/list';

const FilterTable = ({
    filterGroup,
    listFilterGroup,
    autos,  
    chooseEngine
}) => {
    const [ engineFilters, setEngineFilters ] = useState(null);
    useEffect(() => {
        listFilterGroup();
    }, []);

    console.log('autos', autos);
    console.log('chooseEngine', chooseEngine);
    console.log('engineFilters', engineFilters);

    useEffect(() => {
        autos['hydra:member'].forEach(auto => {
            if(auto['@id'] === chooseEngine) {
                return setEngineFilters(auto.filters);
            }
        });
    }, [chooseEngine]);
    
    return (
        <div className="filter-table">
            <table>
                <thead>
                <th>
                    {filterGroup && filterGroup['hydra:member'].map(group => 
                        <td>{group.name}</td>
                    )}
                    
                </th>
                </thead>
                <tbody>

                <tr>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state', state);
    const {
        retrieved: filterGroup
      } = state.filtergroup.list;
    return { filterGroup };
  };
  
  const mapDispatchToProps = dispatch => ({
    listFilterGroup: page => dispatch(listFilterGroup(page)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FilterTable);