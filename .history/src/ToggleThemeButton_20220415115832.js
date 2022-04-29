import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';

const darkTheme = {
  palette: { mode: 'dark' },
};
const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button onclick="myFunction()">
      {' '}
      <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
      <LampIcon />
    </button>
  </Typography>
);

export default ToggleThemeButton;
