import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  CommentField,
  EditButton,
} from 'react-admin';

export const Comments = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <CommentField source="comments" />
      <EditButton />
    </Datagrid>
  </List>
);
