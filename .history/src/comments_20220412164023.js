import * as React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton } from 'react-admin';

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
