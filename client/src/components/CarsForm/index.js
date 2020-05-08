import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './styles.scss';
import { connect } from 'react-redux';
import { list as listAutoModel } from '../../actions/automodel/list';
import { list as listAutoBrand } from '../../actions/autobrand/list'
import { list as listAutos } from '../../actions/auto/list'
import FilterTable from '../FilterTable';

const CarsForm = ({
    autoType, 
    autoModel,
    autoBrand,
    autos, 
    listAutoModel,
    listAutoBrand,
    listAutos
}) => {
    const currentTypeId = useParams();
    const [brands, setBrands] = useState([]);
    const [models, setModels] = useState([]);

    const [chooseBrand, setChooseBrand] = useState(null);
    const [chooseModel, setChooseModel] = useState(null);
    const [chooseEngine, setChooseEngine] = useState(null);

    useEffect(() => {
        listAutoModel();
        listAutoBrand();
        listAutos();
    }, []);

    useEffect(() => {
        setChooseEngine(null);
    }, [chooseBrand, chooseModel]);

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
        }


    }, [autoType, autoModel, autoBrand]);

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
                                    <div  
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

            {chooseBrand && chooseModel && chooseEngine && (
                <FilterTable 
                    autos={autos}  
                    chooseEngine={chooseEngine}
                />
            )}
         
        </div>
    )
}

const mapStateToProps = state => {
  const { retrieved: autoType } = state.autotype.list;

  const {
    retrieved: autoModel,
  } = state.automodel.list;

  const {
    retrieved: autoBrand
  } = state.autobrand.list;

  const {
    retrieved: autos
  } = state.auto.list;

  return { autoType, autoModel, autoBrand, autos };
};

const mapDispatchToProps = dispatch => ({
    listAutoModel: page => dispatch(listAutoModel(page)),
    listAutoBrand: page => dispatch(listAutoBrand(page)),
    listAutos: page => dispatch(listAutos(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsForm);
