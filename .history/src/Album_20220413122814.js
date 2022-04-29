import * as React from 'react';
import { ImageInput, ImageField, Datagrid } from 'react-admin';

export const Albums = (props) => (
  <Datagrid>
    <ImageInput source="pictures" label="Related pictures" accept="image/*">
      <ImageField source="src" title="title" />
    </ImageInput>
  </Datagrid>
);
