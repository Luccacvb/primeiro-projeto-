import * as React from 'react';
import { List, Datagrid, TextField, Comment, EditButton } from 'react-admin';

export const Comments = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <Comment source="comments" />
      <EditButton />
    </Datagrid>
  </List>
);
