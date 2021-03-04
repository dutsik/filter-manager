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
import { ReferenceInput, ReferenceArrayField, SingleFieldList, ChipField,
  ReferenceArrayInput,
  Filter,
  SelectInput,
  FormDataConsumer,  AutocompleteInput, AutocompleteArrayInput , TextField, ReferenceField } from "react-admin";

const AutoFilters = props => {
  console.log(props.filterValues)
  return (
    <Filter {...props}>
      <ReferenceInput
        alwaysOn
        resettable
        source="brand"
        reference="auto_brands"
        perPage={100}
        onChange={
          (e) => {
            props.setFilters(
              {
                model:{brand:e.target?.value ?? null},
                brand:e.target?.value ?? null
              }
            )

          }
        }
      >
        <SelectInput optionText={"name"}/>
      </ReferenceInput>
      {  props.filterValues.brand &&
      <ReferenceInput
        key={props.filterValues.brand}
        alwaysOn={true}
        allowEmpty={true}
        resettable={true}
        reference={"auto_models"}
        source={"model"}
        filter={{brand: props.filterValues.brand}}
        perPage={100}
        onChange={
          (e) => {

            props.setFilters(
              {
                model:(e.target?.value ? e.target.value : {brand:props.filterValues.brand}),
                brand:props.filterValues.brand
              }
            )

          }
        }

      >
        <SelectInput optionText={(p)=>{ return p.name}}
        />
      </ReferenceInput>
      }


    </Filter>
  )

}

const AutoList = props => (
  <ListGuesser {...props}  sort={{ field: 'engine', order: 'ASC' }} filters={<AutoFilters/>}>
    <FieldGuesser source={"engine"} />
    <ReferenceField  source="model" reference="auto_models" sortBy="model.nameWithBrand">
      <TextField source="nameWithBrand" />
    </ReferenceField>
    <ReferenceArrayField source="filters" reference="filters">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ListGuesser>
);
const AutoShow= props => (
  <ShowGuesser  {...props}>
    <FieldGuesser source={"engine"}  addLabel={true}/>
    <ReferenceField  source="model" reference="auto_models">
      <TextField source="nameWithBrand" />
    </ReferenceField>
    <ReferenceArrayField source="filters" reference="filters">
      <SingleFieldList>
        <ChipField  source="name"/>
      </SingleFieldList>
    </ReferenceArrayField>
  </ShowGuesser >
);

const AutoCreate = props => (
    <CreateGuesser {...props}>
      <InputGuesser source="engine"/>
      <ReferenceInput
        source="brand" reference="auto_brands"
        perPage={1000}
        filterToQuery={searchText => ({name: searchText})}
      >
        <AutocompleteInput optionText="name"/>
      </ReferenceInput>
      <FormDataConsumer>
        {({formData}) => {
          return formData.brand &&
            <ReferenceInput
              source="model" reference="auto_models"
              perPage={1000}
              filter={{brand: formData.brand}}
              filterToQuery={searchText => ({nameWithBrand: searchText})}
              resource={"autos"}
            >
              <AutocompleteInput optionText="nameWithBrand"/>
            </ReferenceInput>
        }}
      </FormDataConsumer>
      <ReferenceArrayInput
        source="filters" reference="filters"
        filterToQuery={searchText => ({name: searchText})}
      >
        <AutocompleteArrayInput optionText="name"/>
      </ReferenceArrayInput>
    </CreateGuesser>
  );

const AutoEdit = props => (
  <EditGuesser  {...props}>
    <InputGuesser source="engine" />
    <ReferenceInput
      source="brand" reference="auto_brands"
      perPage={1000}
      filterToQuery={searchText => ({ name: searchText })}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
    <FormDataConsumer>
      {({getSource, formData}) => {
        return formData.brand &&
          <ReferenceInput
            source="model" reference="auto_models"
            perPage={1000}
            filter={{brand: formData.brand}}
            filterToQuery={searchText => ({nameWithBrand: searchText})}
            resource={"autos"}
          >
            <AutocompleteInput optionText="nameWithBrand"/>
          </ReferenceInput>
      }}
    </FormDataConsumer>
    <ReferenceArrayInput
      source="filters" reference="filters"
      filterToQuery={searchText => ({ name: searchText })}
    >
      <AutocompleteArrayInput  optionText="name" />
    </ReferenceArrayInput >
  </EditGuesser >
);

const Auto = props => (
  <ResourceGuesser {...props}
                   list={AutoList}
                   show={AutoShow}
                   create={AutoCreate}
                   edit={AutoEdit}
  />
)
export default Auto
