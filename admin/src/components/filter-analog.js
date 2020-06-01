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

const FilterAnalogList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"} />
    <ReferenceField  source="filter" reference="filters">
      <TextField source="name" />
    </ReferenceField>
  </ListGuesser>
);
const FilterAnalogShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"}  addLabel={true}/>
    <ReferenceField  source="filter" reference="filters">
      <TextField source="name" />
    </ReferenceField>
  </ShowGuesser >
);

const FilterAnalogCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="filter"
      reference="filters"
      filterToQuery={searchText => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </CreateGuesser>
);
const FilterAnalogEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="filter"
      reference="filters"
      filterToQuery={searchText => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  </EditGuesser >
);

const FilterAnalog = props => (
  <ResourceGuesser {...props}
                   list={FilterAnalogList}
                   show={FilterAnalogShow}
                   create={FilterAnalogCreate}
                   edit={FilterAnalogEdit}
  />
)
export default FilterAnalog
