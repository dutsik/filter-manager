import React from 'react';
import { HydraAdmin } from '@api-platform/admin';
import belarusianMessages from 'ra-language-belarusian';
import polyglotI18nProvider from 'ra-i18n-polyglot';
// domain translations
import * as domainMessages from './i18n';
import FilterGroup from "./components/filter-group";
import FilterType from "./components/filter-type";

const messages = {
  be: { ...belarusianMessages, ...domainMessages.be },
};

const i18nProvider = polyglotI18nProvider(locale => messages["be"]);



export default () =>
{
  // const {loading} = useAuth0();
  //
  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  return (
    <HydraAdmin i18nProvider={i18nProvider} entrypoint={process.env.REACT_APP_API_ENTRYPOINT}>

      <FilterGroup name="filter_groups"
      />
      <FilterType name="filter_types"
      />
      {/* While deprecated resources are hidden by default, using an explicit ResourceGuesser component allows to add them back. */}
    </HydraAdmin>
  )
}
