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
import { ReferenceInput, AutocompleteInput, TextField, ReferenceField } from "react-admin";

const AutoModelList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"} />
    <ReferenceField  source="brand" reference="auto_brands">
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField  source="type" reference="auto_types">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);
const AutoModelShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"}  addLabel={true}/>
    <ReferenceField  source="brand" reference="auto_brands">
      <TextField source="name" />
    </ReferenceField>
    <ReferenceField  source="type" reference="auto_types">
      <TextField source="name" />
    </ReferenceField>
  </ShowGuesser >
);

const AutoModelCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="brand" reference="auto_brands"
      perPage={1000}
      filterToQuery={searchText => ({ brand: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput
      source="type" reference="auto_types"
      filterToQuery={searchText => ({ type: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);
const AutoModelEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="brand" reference="auto_brands"
      perPage={1000}
      filterToQuery={searchText => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput
      source="type" reference="auto_types"
      filterToQuery={searchText => ({ type: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser >
);

const AutoModel = props => (
  <ResourceGuesser {...props}
                   list={AutoModelList}
                   show={AutoModelShow}
                   create={AutoModelCreate}
                   edit={AutoModelEdit}
  />
)
export default AutoModel
