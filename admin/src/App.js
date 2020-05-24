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

const messages = {
  be: { ...belarusianMessages, ...domainMessages.be },
  ru: { ...russianMessages, ...domainMessages.ru },
};

const i18nProvider = polyglotI18nProvider(locale => messages["ru"]);



export default () =>
{
  // const {loading} = useAuth0();
  //
  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  return (
    <HydraAdmin i18nProvider={i18nProvider} entrypoint={process.env.REACT_APP_API_ENTRYPOINT}>
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
