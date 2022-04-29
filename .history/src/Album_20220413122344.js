import * as React from 'react';
import { Image, ImageInput, ImageField } from 'react-admin';

export const Albums = (props) => (
  <Image {...props}>
    <ImageInput source="pictures" label="Related pictures" accept="image/*">
      <ImageField source="src" title="title" />
    </ImageInput>
  </Image>
);
