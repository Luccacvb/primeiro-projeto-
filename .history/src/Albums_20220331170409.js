import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';
import MyUrlField from './UserList';

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
