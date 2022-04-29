import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ShowButton,
  Show,
  Tab,
  TabbedShowLayout,
  RichTextField,
  DateField,
  NumberField,
  ReferenceManyField,
  BooleanField,
} from 'react-admin';
import { AutocompleteInput } from 'react-admin';

<AutocompleteInput
  source="category"
  choices={[
    { id: 'programming', name: 'Programming' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'photography', name: 'Photography' },
  ]}
/>;

const CommentTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const EditComment = (props) => (
  <Edit title={<CommentTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Email Address" source="email" type="email" />
      <ReferenceInput source="userId" reference="name">
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
      <Tab label="comments" path="comments">
        <RichTextField source="body" addLabel={false} />
      </Tab>
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const CommentShow = (props) => (
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

export default Comments;
