import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import '../CarsForm/styles.scss'
import { connect } from 'react-redux';
import { findById } from '../../utils/dataAccess';


const search = (size, value) => {
  if (size.length > 0) return Number(size) == Number(value)
  return true;
}

const InsizeForm = ({
  filterGroup,
  filterList,
  filterType,
}) => {
  console.log('filterList', filterList, filterGroup, filterType);
  const [groupFilters, setGroupFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);

  const [chooseGroup, setChooseGroup] = useState(null);
  const [chooseType, setChooseType] = useState(null);

  const [searchArray, setSearchArray] = useState([]);

  const [d, setD] = useState('');
  const [d1, setD1] = useState('');
  const [d2, setD2] = useState('');
  const [d3, setD3] = useState('');
  const [f, setF] = useState('');
  const [g, setG] = useState('');
  const [l, setL] = useState('');
  const [b, setB] = useState('');
  const [h, setH] = useState('');

  useEffect(() => {
          
      if (filterGroup) {
        setGroupFilters(filterGroup['hydra:member']);
      }


  }, [filterGroup]);
  /*{
    chooseGroup && chooseType && filterList['hydra:member'].map(filter => {
      if (filter.filterGroup === chooseGroup && filter.filterType === chooseType) {
        return filter;
      }
    })
  }*/
    return (
        <div className="custom-container">
            <div className="cars-form">
                <div className="cars-form__select">
                    <div className="select-title">Группа фильтров: </div>
                    <select onChange={(e) => {
                        if (e.target.value !== 'none') {
                          setChooseGroup(e.target.value)
                        }
                        else {
                          setChooseGroup(null)
                          setChooseType(null)
                        }
                    }}>
                        <option value="none"> Выберите группу...</option>

                        {groupFilters && groupFilters.map((group) => 
                            <option value={group['@id']}>{group.name}</option>
                        )}
                    </select>
                </div>
                {
                    chooseGroup && (
                        <div className="cars-form__select">
                            <div className="select-title">Тип фильтров: </div>
        
                            <select onChange={(e) => 
                                e.target.value !== 'none' ? 
                                    setChooseType(e.target.value) :
                                    setChooseType(null)
                            }>
                                <option value="none">Выберите модель...</option>
                                {filterType && filterType['hydra:member'].map((type) => {
                                    if (type.filterGroup === chooseGroup) {
                                      return (<option value={type['@id']}>{type.name}</option>);
                                    }
                                    return null;
                                }
                                    
                                ).filter(index => !!index)}
                            </select>
                        </div>                              
                    )
                } 
            </div>
            {
              chooseGroup && chooseType && (
              <div className="cars-form">
                <div className="size">
                  <div className="size__left-block">
                    D: <input type="text" value={d} onChange={(e) => setD(e.target.value)}/>
                    D1: <input type="text" value={d1} onChange={(e) => setD1(e.target.value)}/>
                    D2: <input type="text" value={d2} onChange={(e) => setD2(e.target.value)}/>
                    D3: <input type="text" value={d3} onChange={(e) => setD3(e.target.value)}/>
                    F: <input type="text" value={f} onChange={(e) => setF(e.target.value)}/>
                  </div>
                  <div className="size__right-block">
                    G: <input type="text" value={g} onChange={(e) => setG(e.target.value)}/>
                    L: <input type="text" value={l} onChange={(e) => setL(e.target.value)}/>
                    B: <input type="text" value={b} onChange={(e) => setB(e.target.value)}/>
                    H: <input type="text" value={h} onChange={(e) => setH(e.target.value)}/>
                    <button onClick={() => {
                      if (chooseGroup && chooseType) {
                        const resultSeatch = filterList['hydra:member'].map(filter => {
                          if (
                            filter.filterGroup === chooseGroup && 
                            filter.filterType === chooseType && 
                            search(d, filter.d) && 
                            search(d1, filter.d1) &&
                            search(d2, filter.d2) &&
                            search(d3, filter.d3) &&
                            search(f, filter.d) &&
                            search(g, filter.d) &&
                            search(l, filter.d) &&
                            search(b, filter.d) &&
                            search(h, filter.d) 
                          ) {
                            return filter;
                          }
                        }).filter(index => !!index);
                        setSearchArray(resultSeatch);
                        console.log('searchArray', resultSeatch);

                      }

                    }}>
                      Найти
                    </button>
                  </div>
                </div>
              </div>
              )}
              <div className="search-info">
              {searchArray.length ? (
                <table>

                    <tr>
                      <th>Фильтр</th>
                      <th>d</th>
                      <th>d1</th>
                      <th>d2</th>
                      <th>d3</th>
                      <th>F</th>
                      <th>G</th>
                      <th>L</th>
                      <th>B</th>
                      <th>H</th>
                    </tr>
                    
                    {searchArray.map(filter => (
                        <tr>
                          <td>{filter.name}</td>
                          <td>{filter.d}</td>
                          <td>{filter.d1}</td>
                          <td>{filter.d2}</td>
                          <td>{filter.d3}</td>
                          <td>{filter.f}</td>
                          <td>{filter.g}</td>
                          <td>{filter.l}</td>
                          <td>{filter.b}</td>
                          <td>{filter.h}</td>
                        </tr> 
                    ))}
                  </table>
                ) : ''}
              </div>
              

          </div>
    )
}

const mapStateToProps = state => {
    return { 
      filterGroup: state.filtergroup.list.retrieved, 
      filterList: state.filter.list.retrieved,
      filterType: state.filtertype.list.retrieved,
    };
  };
  
const mapDispatchToProps = dispatch => ({

  });
  
export default connect(mapStateToProps, mapDispatchToProps)(InsizeForm);