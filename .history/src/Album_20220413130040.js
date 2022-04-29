import * as React from 'react';
import { ImageInput, ImageField } from 'react-admin';

export const Albums = (props) => (
  <label for="avatar">
    Choose a profile picture:
    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
      <ImageInput
        source="pictures"
        label="Related pictures"
        accept="image/*"
        placeholder={<p>Drop your file here</p>}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </input>
  </label>
);
