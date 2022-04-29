import * as React from 'react';
import { ImageInput, ImageField } from 'react-admin';

export const Albums = (props) => (
  <ImageInput
    source="pictures"
    label="Related pictures"
    accept="image/*"
    placeholder={<p>Drop your file here</p>}
  >
    <ImageField source="src" title="title" />
  </ImageInput>
);
