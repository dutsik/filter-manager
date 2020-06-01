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

const FilterTypeList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"} />
    <ReferenceField  source="filterGroup" reference="filter_groups">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);
const FilterTypeShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"}  addLabel={true}/>
    <FieldGuesser source={"slug"} addLabel={true}/>
    <ReferenceField  source="filterGroup" reference="filter_groups">
      <TextField source="name" />
    </ReferenceField>
  </ShowGuesser >
);

const FilterTypeCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="filterGroup"
      reference="filter_groups"
      filterToQuery={searchText => ({ filterGroup: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);
const FilterTypeEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="filterGroup"
      reference="filter_groups"
      filterToQuery={searchText => ({ filterGroup: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser >
);

const FilterType = props => (
  <ResourceGuesser {...props}
                   list={FilterTypeList}
                   show={FilterTypeShow}
                   create={FilterTypeCreate}
                   edit={FilterTypeEdit}
  />
)
export default FilterType
