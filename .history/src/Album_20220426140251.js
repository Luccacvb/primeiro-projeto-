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
      <TextField source="title" label="Title" />
      <ReferenceManyField label="Photos" reference="photos" target="albumId">
        <SingleFieldList>
          <ImageField source="url" title="title" />
        </SingleFieldList>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
