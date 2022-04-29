import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  SimpleList,
  ReferenceInput,
  SelectInput,
  TextInput,
  Show,
  RichTextField,
  DateField,
  DeleteButton,
  DateInput,
  ShowButton,
  TabbedShowLayout,
  Tab,
  NumberField,
  ReferenceManyField,
  BooleanField,
} from 'react-admin';

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name" />
  </ReferenceInput>,
];

export const PostList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('dm'));
  return (
    <List filters={postFilters} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
          <DeleteButton />
          <ShowButton />
        </Datagrid>
      )}
    </List>
  );
};

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body" />
    </SimpleForm>
  </Edit>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput multiline source="body" />
      <DateInput label="published" source="publishedAt" />
    </SimpleForm>
  </Create>
);

export const PostShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout syncWithLocation={false}>
      <Tab label="summary">
        <TextField label="Id" source="id" />
        <TextField source="title" />
        <TextField source="teaser" />
      </Tab>
      <Tab label="body" path="body">
        <RichTextField source="body" addLabel={false} />
      </Tab>
      <Tab label="Diverse" path="diverse">
        <TextField
          label="Password (if protected post)"
          source="password"
          type="password"
        />
        <DateField label="Publication date" source="published_at" />
        <NumberField source="average_note" />
        <BooleanField
          label="Allow comments?"
          source="commentable"
          defaultValue
        />
        <TextField label="Nb views" source="views" />
      </Tab>
      <Tab label="comments" path="comments">
        <ReferenceManyField
          reference="comments"
          target="post_id"
          addLabel={false}
        >
          <Datagrid>
            <TextField source="body" />
            <DateField source="created_at" />
            <EditButton />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
