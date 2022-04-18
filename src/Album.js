import * as React from 'react';
import { List, ImageInput, ImageField } from 'react-admin';

const Albums = (props) => (
  <List {...props}>
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
  </List>
);

export default Albums;
