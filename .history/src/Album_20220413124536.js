import * as React from 'react';
import { ImageInput, ImageField } from 'react-admin';

export const Albums = (props) => (
  <form>
    <input
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
    </input>
  </form>
);
