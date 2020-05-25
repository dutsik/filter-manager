import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { connect } from 'react-redux';
import FilterTable from '../FilterTable';
import { findById } from '../../utils/dataAccess';


const CarsForm = ({
    autoType, 
    autoModel,
    autoBrand,
    autos, 
}) => {
    
    const currentTypeId = useParams();
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);

    const [chooseBrand, setChooseBrand] = useState(null);
    const [chooseModel, setChooseModel] = useState(null);
    const [chooseEngine, setChooseEngine] = useState(null);
    const [chooseFilter, setChooseFilter] = useState(null);

    useEffect(() => {
        
        setChooseEngine(null);
    }, [chooseBrand, chooseModel]);

    useEffect(() => {
        setChooseFilter(null);
    }, [chooseEngine]);

    useEffect(() => {
        console.log('CHECKCEKC')
        setChooseBrand(null);
        setChooseModel(null);
        setChooseEngine(null);
        setChooseFilter(null);
    }, [currentTypeId]);

    useEffect(() => {
        
        if (autoType && autoModel && autoBrand) {
            const typeModelsId = autoType['hydra:member']
            .find(item => item.id === currentTypeId.id);

            const typeModels = autoModel['hydra:member'].map(item => {
                if (typeModelsId.models.indexOf(item['@id']) !== -1)
                    return item;
                return null;
            }).filter(index => !!index);

            const typeBrandsId = typeModels.map(item => item.brand);
            const uniqueTypeBrandsId = Array.from(new Set(typeBrandsId));
            

            const typeBrands = autoBrand['hydra:member'].map(item => {
                if (uniqueTypeBrandsId.indexOf(item['@id']) !== -1)
                    return item;
                return null;
            }).filter(index => !!index);


            setBrands(typeBrands);
            setModels(typeModels);
            setChooseBrand(null);
        }


    }, [autoType, autoModel, autoBrand, currentTypeId]);

    return (
        <div className="custom-container">
            <div className="cars-form">
                <div className="cars-form__select">
                    <div className="select-title">Марка: </div>
                    <select onChange={(e) => {
                        if (e.target.value !== 'none') {
                            setChooseBrand(e.target.value)
                        }
                        else {
                            setChooseBrand(null)
                            setChooseModel(null)
                        }
                    }}>
                        <option value="none"> Выберите марку...</option>
                        {brands && brands.map((brand) => 
                            <option value={brand['@id']}>{brand.name}</option>
                        )}
                    </select>
                </div>
                {
                    chooseBrand && (
                        <div className="cars-form__select">
                            <div className="select-title">Модель: </div>
        
                            <select onChange={(e) => 
                                e.target.value !== 'none' ? 
                                    setChooseModel(e.target.value) :
                                    setChooseModel(null)
                            }>
                                <option value="none">Выберите модель...</option>
                                {brands && brands.map((brand) => {
                                    if (brand['@id'] === chooseBrand) {
                                    const optionsName = models.map(model => {
                                            if (brand.models.indexOf(model['@id']) !== -1)
                                                return (<option value={model['@id']}>{model.name}</option>);
                                            return null;
                                        }).filter(index => !!index)
                                        return optionsName;
                                    }
                                }
                                    
                                )}
                            </select>
                        </div>                              
                    )
                } 
            </div>

            {
                chooseBrand && chooseModel && (
                    <div className="cars-form">
                        <div className="model-info-title">Тип двигателя</div>
                        {autos && autos['hydra:member'].map((auto, index) => {
                            if(auto.model === chooseModel) {
                                return (
                                    <div className="engine-type" 
                                        onClick={() => setChooseEngine(auto['@id'])}
                                    >
                                        {auto.engine}
                                    </div>
                                )
                            }  
                        })}
                    </div>
                )
            }
            <div className="filter-info-container">
                {chooseBrand && chooseModel && chooseEngine && (
                    <FilterTable
                        autoFilters={findById(chooseEngine, autos).filters}
                        setChooseFilter={setChooseFilter} 
                    />
                )}

                {chooseBrand && chooseModel && chooseEngine && chooseFilter && (
                    <div className="filter-description">
                        <div className="filter-description__title">{chooseFilter.name}</div>
                        <div className="filter-description__info">
                            <div className="info-left-column">
                                <div>D: {chooseFilter.d}</div>
                                <div>D1: {chooseFilter.d1}</div>
                                <div>D2: {chooseFilter.d2}</div>
                                <div>D3: {chooseFilter.d3}</div>
                                <div>F: {chooseFilter.f}</div>
                            </div>
                            <div className="info-right-column">
                                <div>G: {chooseFilter.g}</div>
                                <div>L: {chooseFilter.l}</div>
                                <div>B: {chooseFilter.b}</div>
                                <div>H: {chooseFilter.h}</div>
                            </div>
                        </div>

                    </div>
                )}

            </div>         
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        autoType: state.autotype.list.retrieved,
        autoModel: state.automodel.list.retrieved,
        autoBrand: state.autobrand.list.retrieved, 
        autos: state.auto.list.retrieved 
    };
};

/*const mapDispatchToProps = dispatch => ({
    listAutoModel: page => dispatch(listAutoModel(page)),
    listAutoBrand: page => dispatch(listAutoBrand(page)),
    listAutos: page => dispatch(listAutos(page))
});*/

export default connect(mapStateToProps, null)(CarsForm);
