import * as React from 'react';
import { List, ImageInput, ImageField } from 'react-admin';

export const Albums = (props) => (
  <List {...props}>
    <ImageInput source="pictures" label="Related pictures" accept="image/*">
      <ImageField source="src" title="title" />
    </ImageInput>
  </List>
);
