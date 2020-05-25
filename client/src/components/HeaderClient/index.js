import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { connect } from 'react-redux';
import { list, reset } from '../../actions/autotype/list';

const HeaderClient = ({
    retrieved,
    loading,
    error, 
    eventSource,
    list,
    reset
}) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        list();
        return () => {
            reset(eventSource);
        }
    }, []);
    return (
        <div className="custom-container">
            <div className="header-client">
                <img 
                    src="https://filter-beltiz.by/wp-content/uploads/2020/01/cropped-logotip-filtr-vert.-rus.png" 
                    className="header-client__logo" 
                    alt="logo"
                />
                <nav className={`header-client__nav ${toggleMenu ? 'open' : ''}`}>
                    <div className="header-client__toggle-close" onClick={() => setToggleMenu(false)}>
                        <div className="close-icon">
                            <div className="close-line"></div>
                            <div className="close-line"></div>
                        </div>
                    </div>
                    <ul>
                    {retrieved && 
                        retrieved['hydra:member'].map((type) => 
                            <li key={type['@id']} onClick={() => setToggleMenu(false)}><Link to={type['@id']}>{type.name}</Link></li>
                        )
                    }
                        <li><Link to="/insize">Применение</Link></li>
                        {/*<li><Link>Поиск по аналогу</Link></li>*/}
                        <li><Link to="/insize">Размеры</Link></li>
                    </ul>
                    
                </nav>
                <div 
                    className="header-client__toggle" 
                    onClick={() => setToggleMenu(true)}
                >
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                    <div className="toggle-line"></div>
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    const {
      retrieved,
      loading,
      error,
      eventSource,
      deletedItem
    } = state.autotype.list;
    return { retrieved, loading, error, eventSource, deletedItem };
  };
  
  const mapDispatchToProps = dispatch => ({
    list: page => dispatch(list(page)),
    reset: eventSource => dispatch(reset(eventSource))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(HeaderClient);