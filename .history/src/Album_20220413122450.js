import * as React from 'react';
import { ImageInput, ImageField } from 'react-admin';

export const Albums = (
  <ImageInput source="pictures" label="Related pictures" accept="image/*">
    <ImageField source="src" title="title" />
  </ImageInput>
);