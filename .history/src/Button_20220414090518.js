import React from 'react';
import { AppBar, defaultTheme } from 'react-admin';
import { Typography } from '@material-ui/material';

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

<import ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />;

export const MyAppBar = (props) => (
  <AppBar {...props}>
    -<Typography flex="1" variant="h6" id="react-admin-title"></Typography>
  </AppBar>
);
