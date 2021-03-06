import React from 'react';
import { HydraAdmin } from '@api-platform/admin';
import belarusianMessages from 'ra-language-belarusian';
import russianMessages from 'ra-language-russian';
import polyglotI18nProvider from 'ra-i18n-polyglot';
// domain translations
import * as domainMessages from './i18n';
import FilterGroup from "./components/filter-group";
import FilterType from "./components/filter-type";
import Filter from "./components/filter";
import FilterAnalog from "./components/filter-analog";
import AutoBrand from "./components/auto/auto-brand";
import AutoType from "./components/auto/auto-type";
import AutoModel from "./components/auto/auto-model";
import Auto from "./components/auto/auto";
import {List, Pagination} from "react-admin";


/* Providers */
import authProvider from './providers/authProvider';
import dataProvider from './providers/dataProvider'
import entrypoint from './providers/entrypoint';


const messages = {
  be: { ...belarusianMessages, ...domainMessages.be },
  ru: { ...russianMessages, ...domainMessages.ru },
};

const i18nProvider = polyglotI18nProvider(locale => messages["ru"]);

List.defaultProps = {
  perPage: 25,
};

Pagination.defaultProps = {
  rowsPerPageOptions: [10, 25, 50, 100],
};

export default () =>
{
  // const {loading} = useAuth0();
  //
  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  return (
    <HydraAdmin
      i18nProvider={i18nProvider}
      dataProvider={dataProvider()}
      // authProvider={authProvider}
      entrypoint={entrypoint}

    >
      <Filter name="filters" />
      <FilterGroup name="filter_groups"
      />
      <FilterType name="filter_types"
      />
      <FilterAnalog name="filter_analogs"
      />
      <Auto name="autos"
      />
      <AutoBrand name="auto_brands"
      />
      <AutoType name="auto_types"
      />
      <AutoModel name="auto_models"
      />


      {/* While deprecated resources are hidden by default, using an explicit ResourceGuesser component allows to add them back. */}
    </HydraAdmin>
  )
}
