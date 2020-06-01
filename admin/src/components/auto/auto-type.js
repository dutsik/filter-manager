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
  SelectArrayInput,
  SelectInput
} from "react-admin";

const AutoTypeList = props => (
  <ListGuesser {...props}  sort={{ field: 'name', order: 'ASC' }}>
    <FieldGuesser source={"name"}/>
    <ReferenceArrayField source="models" reference="auto_models">
      <SingleFieldList>
        <ChipField  source="nameWithBrand"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
);
const AutoTypeShow = props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"name"} addLabel={true}/>
    <ReferenceArrayField source="models" reference="auto_models">
      <SingleFieldList>
        <ChipField  source="nameWithBrand"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ShowGuesser>
);

const AutoTypeCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="models" reference="auto_models"
    >
      <SelectArrayInput  optionText="nameWithBrand"/>
    </ReferenceArrayInput >
  </CreateGuesser>
);
const AutoTypeEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name"/>
    <ReferenceArrayInput
      source="models" reference="auto_models"
    >
      <SelectArrayInput  optionText={((record)=> { return 'asd' + record.nameWithBrand})}/>
    </ReferenceArrayInput >
  </EditGuesser>
);

const AutoType = props => (
  <ResourceGuesser {...props}
                   list={AutoTypeList}
                   show={AutoTypeShow}
                   create={AutoTypeCreate}
                   edit={AutoTypeEdit}
  />
)
export default AutoType
