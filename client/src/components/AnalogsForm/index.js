import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { connect } from 'react-redux';
import FilterTable from '../FilterTable';
import { findById } from '../../utils/dataAccess';
import { list as getFilterAnalog } from '../../actions/filteranalog/list';


const AnalogsForm = ({
    filterAnalogs,
    getFilterAnalog,
    filterList
}) => {
    const [filterInput, setFilterInput] = useState('')
    console.log('filterAnalogs', filterAnalogs, getFilterAnalog);
    return (
        <div className="custom-container">
            <div className="cars-form">
                <input className="analog-input" type="text" value={filterInput} onChange={(e) => setFilterInput(e.target.value)}/>
                <button onClick={() => {
                    getFilterAnalog(filterInput);
                }}>Поиск</button>
            </div>
            <div className="search-info">
              {filterAnalogs ? (
                <table>

                    <tr>
                      <th>Аналоги</th>
                    </tr>
                    
                    {filterAnalogs['hydra:member'].map(analog => { 
                        return (
                            <tr>
                                <td>{analog.name}</td>
                            </tr> 
                        )
                    }).filter(index => !!index)}
                  </table>
                ) : ''}
              </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        filterAnalogs: state.filteranalog.list.retrieved,
        filterList: state.filter.list.retrieved
    };
};

const mapDispatchToProps = dispatch => ({
    getFilterAnalog: name => dispatch(getFilterAnalog(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnalogsForm);
