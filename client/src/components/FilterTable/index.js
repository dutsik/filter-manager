import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { connect } from 'react-redux';
import { findById } from '../../utils/dataAccess';
import { list as getFilterList } from '../../actions/filter/list';
//import { list as listFilterGroup } from '../../actions/filtergroup/list';


const FilterTable = ({
    filterGroup,
    filterList,
    autoFilters,
    setChooseFilter,
    getFilterList
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

        
    }, [autoFilters]);
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

                <tr>
                    {filterGroup && filterGroup['hydra:member'].map(group => 
                        <th>{group.name}</th>
                    )}
                    
                </tr>


                
                <tr>
                    {filterGroup && engineFilters && filterGroup['hydra:member'].map(group => (
                        <td>
                            {engineFilters.map(filter => {
                                if (group['@id'] === filter.filterGroup)
                                    return (
                                        <div 
                                            className="filter-name"
                                            onClick={() => setChooseFilter(filter)}
                                        >
                                            {filter.name}
                                        </div>
                                    )
                                return null;
                                }).filter(index => !!index)
                            }
                        </td> 
                    ))}
                </tr>

            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        filterGroup: state.filtergroup.list.retrieved, 
        filterList: state.filter.list.retrieved
    };
  };
  
const mapDispatchToProps = dispatch => ({
    getFilterList: page => dispatch(getFilterList(page))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(FilterTable);