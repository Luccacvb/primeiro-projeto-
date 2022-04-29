import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const Comments = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="comments" />
      <EditButton />
    </Datagrid>
  </List>
);

export const commentsEdit = (props) => (
  <SimpleForm>
    <TextInput disabled source="id" />
    <ReferenceInput source="userId" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>
    <TextInput source="title" />
    <TextInput multiline source="body" />
  </SimpleForm>
);
