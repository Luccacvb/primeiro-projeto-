import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';
import { nightModeStorage, nightMode } from './Toggle';

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button onclick="Click()">
      {' '}
      <LampIcon />
      nightModeStorage = {nightModeStorage}
      nightMode = {nightMode}
    </button>
  </Typography>
);

export default ToggleThemeButton;
