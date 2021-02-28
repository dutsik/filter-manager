import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {
    hydraDataProvider as baseHydraDataProvider,
    fetchHydra as baseFetchHydra,
} from "@api-platform/admin";

import parseHydraDocumentation from "@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation";
import fetchHeaders from './dataProviders/fetchHeaders';
// import authProvider from "./authProvider";
import entrypoint from '../providers/entrypoint'
import _customRequest from "./dataProviders/_customRequest";
import {transformJsonLdDocumentToReactAdminDocument} from "@api-platform/admin/lib/hydra/dataProvider";
import {fetchUtils} from 'react-admin';

const setHeaders = new Headers(fetchHeaders());

const httpClient = fetchUtils.fetchJson;

const fetchHydra = (url, options = {}) => {
    return localStorage.getItem("token")
        ? baseFetchHydra(url, {
            ...options,
            headers: setHeaders,
        })
        : baseFetchHydra(url, options);
}

const apiDocumentationParser = entrypoint => parseHydraDocumentation(
    entrypoint,
    localStorage.getItem("token") ? {headers: setHeaders} : {}
).then(({api}) => ({api}),
    (result) => {
        switch (result.status) {
            // case 401:
            //     authProvider.checkError(result)
            //     return Promise.resolve({
            //         api: result.api,
            //         customRoutes: [
            //             <Route path="/" render={() => {
            //                 return window.localStorage.getItem("token") ? window.location.reload() :
            //                     <Redirect to="/login"/>
            //             }}/>
            //         ],
            //     });
            default:
                return Promise.reject(result);
        }
    },
);

const dataProvider = baseHydraDataProvider(entrypoint, fetchHydra, apiDocumentationParser, true );

export default (account) => ({
    ...dataProvider, // Extending existing data provider
    create: (resource, params) => {
        // Check if standard request without images, or if resource is not from "media_objects"
        if (resource !== 'filters' || !params.data.pictures) {
            return dataProvider.create(resource, params);
        }

        // Loop through all images and run helper _customRequest(entrypoint, fetchHeaders, params)
        return Promise.all(params.data.pictures.map(file => _customRequest(entrypoint, resource, fetchHeaders, {
            file,
            accountId: params.data.account.split("/").pop()
        })))
            .then(response => {
                // Get response from just one request
                return response[0]
            });
    },
    getOne: (resource, params) => {
        // if (resource === "profiles") {
        //     return httpClient(`${entrypoint}/${resource}/${params.id.split('/').pop()}?account=${account}`
        //         , {headers: new Headers(fetchHeaders())}).then(({json}) => ({
        //         data: transformJsonLdDocumentToReactAdminDocument(json),
        //     }))
        // }
        return dataProvider.getOne(resource, params);
    }
})
