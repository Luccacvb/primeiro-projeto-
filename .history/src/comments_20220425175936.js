import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

const CommentEditButton = ({ record }) => (
  <EditButton basePath="/comments" label="Edit comment" record={record} />
);

const CommentTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const EditComment = (props) => (
  <Edit title={<CommentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

const Comments = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="comments" />
      <EditButton />
    </Datagrid>
  </List>
);

export default Comments;
