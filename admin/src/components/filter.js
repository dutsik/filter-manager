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
import { ReferenceInput, AutocompleteInput, NumberInput, TextField, ReferenceField, ReferenceFieldController,ReferenceArrayInput, SelectArrayInput,SelectInput  } from "react-admin";
import { useTranslate } from 'react-admin';



const FilterList = props => {
  const translate = useTranslate();
  return (<ListGuesser {...props}>
      <FieldGuesser source={"name"}/>
      <ReferenceFieldController label={translate('resources.filters.fields.filterGroup')} reference="filter_types" source="filterType"
                                link={false}>
        {({referenceRecord, ...props}) => (
          <ReferenceField basePath="/filter_groups" resource="filter_types" reference="filter_groups"
                          source="filterGroup" record={referenceRecord || {}} link="show">
            <TextField source="name"/>
          </ReferenceField>
        )}
      </ReferenceFieldController>
      <ReferenceField source="filterType" reference="filter_types">
        <TextField source="name"/>
      </ReferenceField>
      <FieldGuesser source={"d"}/>
      <FieldGuesser source={"d1"}/>
      <FieldGuesser source={"d2"}/>
      <FieldGuesser source={"d3"}/>
      <FieldGuesser source={"f"}/>
      <FieldGuesser source={"g"}/>
      <FieldGuesser source={"l"}/>
      <FieldGuesser source={"b"}/>
      <FieldGuesser source={"h"}/>
      <FieldGuesser source={"comments"}/>
    </ListGuesser>
  )
};
const FilterShow= props => {
  const translate = useTranslate();
  return (<ShowGuesser  {...props}>
    <FieldGuesser source={"name"} addLabel={true}/>
    <ReferenceFieldController label={translate('resources.filters.fields.filterGroup')} reference="filter_types"
                              source="filterType"
                              link={false} addLabel={true}>
      {({referenceRecord, ...props}) => (
        <ReferenceField basePath="/filter_groups" resource="filter_types" reference="filter_groups"
                        source="filterGroup" record={referenceRecord || {}} link="show" >
          <TextField source="name"/>
        </ReferenceField>
      )}
    </ReferenceFieldController>
    <ReferenceField source="filterType" reference="filter_types">
      <TextField source="name"/>
    </ReferenceField>
    <FieldGuesser source="d" addLabel={true}/>
    <FieldGuesser source={"d1"} addLabel={true}/>
    <FieldGuesser source={"d2"} addLabel={true}/>
    <FieldGuesser source={"d3"} addLabel={true}/>
    <FieldGuesser source={"f"} addLabel={true}/>
    <FieldGuesser source={"g"} addLabel={true}/>
    <FieldGuesser source={"l"} addLabel={true}/>
    <FieldGuesser source={"b"} addLabel={true}/>
    <FieldGuesser source={"h"} addLabel={true}/>
    <FieldGuesser source={"comments"}  addLabel={true}/>
  </ShowGuesser>);
};

const FilterCreate = props => (
  <CreateGuesser {...props}>
    <InputGuesser source="name" />
    <ReferenceInput
      source="filterType"
      reference="filter_types"
    >
      <SelectInput  optionText={((record)=> { return record.name})}/>
    </ReferenceInput >

    <InputGuesser
      source="d"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d1"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d2"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d3"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />

    <InputGuesser source="f"/>
    <InputGuesser source="g"/>
    <InputGuesser source="l"/>
    <InputGuesser source="b"/>
    <InputGuesser source="h"/>
    <InputGuesser source={"comments"}/>
  </CreateGuesser>
);
const FilterEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="name" />

    <ReferenceInput
      source="filterType"
      reference="filter_types"
    >
      <SelectInput  optionText={((record)=> { return record.name})}/>
    </ReferenceInput >

    <InputGuesser
      source="d"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d1"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d2"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />
    <InputGuesser
      source="d3"
      parse={(value) => (value.replace(",", "."))}
      format={(value) => ((value === undefined) ? '': value.toString().replace(".", ","))}
    />

    <InputGuesser source="f"/>
    <InputGuesser source="g"/>
    <InputGuesser source="l"/>
    <InputGuesser source="b"/>
    <InputGuesser source="h"/>
    <InputGuesser source={"comments"}/>
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
