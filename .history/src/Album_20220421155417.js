import * as React from 'react';
import {
  List,
  Datagrid,
  ShowButton,
  Show,
  SimpleShowLayout,
  //ImageInput,
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
    {/*<input
      type="file"
      id="docpicker"
      accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    >
      <ImageInput
        source="pictures"
        label="Related pictures"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </input>*/}
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
