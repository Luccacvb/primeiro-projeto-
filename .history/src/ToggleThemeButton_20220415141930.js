import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';

const ToggleThemeButton = (props) => {
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button onclick="Click()">
      {' '}
      <LampIcon />
    </button>
  </Typography>;
};

export default ToggleThemeButton;
