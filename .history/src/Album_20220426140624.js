import * as React from 'react';
import {
  List,
  Datagrid,
  ShowButton,
  Show,
  SimpleShowLayout,
  ImageField,
  ReferenceManyField,
  SingleFieldList,
  TextField,
  TextInput,
} from 'react-admin';

export const AlbumList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Title" />
      <ShowButton />
    </Datagrid>
  </List>
);

export const AlbumShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextInput source="postId" resettable />
      <TextInput disabled source="id" />
      <TextField source="title" label="Title" />
      <ReferenceManyField label="Photos" reference="photos" target="albumId">
        <SingleFieldList>
          <ImageField source="url" title="thumbnailUrl" />
        </SingleFieldList>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
