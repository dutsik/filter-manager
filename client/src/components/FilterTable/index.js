import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { connect } from 'react-redux';
import { findById } from '../../utils/dataAccess';
//import { list as listFilterGroup } from '../../actions/filtergroup/list';



const FilterTable = ({
    filterGroup,
    filterList,
    autoFilters,
    setChooseFilter
}) => {
    const [ engineFilters, setEngineFilters ] = useState(null);

    useEffect(() => {
        const filters = [];
        autoFilters.forEach((filterId) => {
            const filterItem = findById(filterId, filterList);
            if (filterItem) {
                filters.push(filterItem);
            }    
        });

        setEngineFilters(filters);
    }, [autoFilters])

    console.log('autoFilters', autoFilters);
    console.log('filtersList', filterList);
    console.log('filterGroup', filterGroup);

    console.log('engineFilters', engineFilters);

    /*useEffect(() => {
        autos['hydra:member'].forEach(auto => {
            if(auto['@id'] === chooseEngine) {
                return setEngineFilters(auto.filters);
            }
        });
    }, [chooseEngine]); */
    
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
                    <td>{engineFilters && 
                        engineFilters.map(filter => 
                            <div onClick={() => setChooseFilter(filter)}>
                                {filter.name}
                            </div>
                        )}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state', state);
    return { 
        filterGroup: state.filtergroup.list.retrieved, 
        filterList: state.filter.list.retrieved
    };
  };
  
/*const mapDispatchToProps = dispatch => ({
    listFilterGroup: page => dispatch(listFilterGroup(page)),
    listFilter: page => dispatch(listFilterGroup(page))
  });*/
  
  export default connect(mapStateToProps, null)(FilterTable);