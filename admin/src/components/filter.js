import {
  CreateGuesser,
  EditGuesser,
  FieldGuesser,
  InputGuesser,
  ListGuesser,
  ResourceGuesser,
  ShowGuesser
} from "@api-platform/admin";
import React from "react";
import { ReferenceInput, AutocompleteInput, TextField, ReferenceField, ReferenceFieldController } from "react-admin";
import { useTranslate } from 'react-admin';



const FilterList = props => {
  const translate = useTranslate();
  return (<ListGuesser {...props}>
      <FieldGuesser source={"name"}/>
      <ReferenceField source="filterType" reference="filter_types">
        <TextField source="name"/>
      </ReferenceField>
      <ReferenceFieldController label={translate('resources.filters.fields.filterGroup')} reference="filter_types" source="filterType"
                                link={false}>
        {({referenceRecord, ...props}) => (
          <ReferenceField basePath="/filter_groups" resource="filter_types" reference="filter_groups"
                          source="filterGroup" record={referenceRecord || {}} link="show">
            <TextField source="name"/>
          </ReferenceField>
        )}
      </ReferenceFieldController>

    </ListGuesser>
  )
};
const FilterShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"}  addLabel={true}/>
    <FieldGuesser source={"slug"} addLabel={true}/>

  </ShowGuesser >
);

const FilterCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />


    <InputGuesser source="description" />
    <InputGuesser source="slug" />
  </CreateGuesser>
);
const FilterEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />


    <InputGuesser source="description" />
    <InputGuesser source="slug" />
  </EditGuesser >
);

const Filter = props => (
  <ResourceGuesser {...props}
                   name="filters"
                   list={FilterList}
                   show={FilterShow}
                   create={FilterCreate}
                   edit={FilterEdit}
  />
)
export default Filter
