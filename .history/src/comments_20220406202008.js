import * as React from 'react';
import { List, Datagrid, TextField, CommentsField } from 'react-admin';

export const Comments = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <CommentsField source="Comments" />
    </Datagrid>
  </List>
);