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
import {
  ReferenceInput,
  AutocompleteInput,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";

const FilterGroupList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"}/>
    <ReferenceArrayField source="filterTypes" reference="filter_types">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
);
const FilterGroupShow = props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"} addLabel={true}/>
    <ReferenceArrayField source="filterTypes" reference="filter_types">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ShowGuesser>
);

const FilterGroupCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="filterTypes"
      reference="filter_types"
    >
      <SelectArrayInput  optionText="name"/>
    </ReferenceArrayInput >
  </CreateGuesser>
);
const FilterGroupEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="filterTypes"
      reference="filter_types"
    >
      <SelectArrayInput  optionText="name"/>
    </ReferenceArrayInput >
  </EditGuesser>
);

const FilterGroup = props => (
  <ResourceGuesser {...props}
                   list={FilterGroupList}
                   show={FilterGroupShow}
                   create={FilterGroupCreate}
                   edit={FilterGroupEdit}
  />
)
export default FilterGroup
