import * as React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './UserList';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <EmailField source="email" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
