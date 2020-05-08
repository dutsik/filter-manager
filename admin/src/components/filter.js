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

const FilterList = props => (
  <ListGuesser {...props}>
    <FieldGuesser source={"name"} />
    <FieldGuesser source={"description"} />
    <FieldGuesser source={"slug"} />
    <ReferenceField label="Account" source="account" reference="accounts">
      <TextField source="slug" />
    </ReferenceField>
  </ListGuesser>
);
const FilterShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"}  addLabel={true}/>
    <FieldGuesser source={"slug"} addLabel={true}/>
    <ReferenceField label="Account" source="account" reference="accounts">
      <TextField source="slug" />
    </ReferenceField>
  </ShowGuesser >
);

const FilterCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="account"
      reference="accounts"
      label="account"
      filterToQuery={searchText => ({ account: searchText })}
    >
      <AutocompleteInput optionText="slug" />
    </ReferenceInput>

    <InputGuesser source="description" />
    <InputGuesser source="slug" />
  </CreateGuesser>
);
const FilterEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="account"
      reference="accounts"
      label="account"
      filterToQuery={searchText => ({ account: searchText })}
    >
      <AutocompleteInput optionText="slug" />
    </ReferenceInput>

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
