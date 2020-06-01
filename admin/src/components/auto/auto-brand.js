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

const AutoBrandList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"}/>
    <ReferenceArrayField source="models" reference="auto_models">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
);
const AutoBrandShow = props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"} addLabel={true}/>
    <ReferenceArrayField source="models" reference="auto_models">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ShowGuesser>
);

const AutoBrandCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="models" reference="auto_models"
    >
      <SelectArrayInput  optionText="name"/>
    </ReferenceArrayInput >
  </CreateGuesser>
);
const AutoBrandEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="models" reference="auto_models"
    >
      <SelectArrayInput  optionText="name"/>
    </ReferenceArrayInput >
  </EditGuesser>
);

const AutoBrand = props => (
  <ResourceGuesser {...props}
                   list={AutoBrandList}
                   show={AutoBrandShow}
                   create={AutoBrandCreate}
                   edit={AutoBrandEdit}
  />
)
export default AutoBrand
