import React from 'react';
import { TOGGLE_SIDEBAR, AppBar, defaultTheme } from 'react-admin';
import { Typography } from '@mui/material';

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

<TOGGLE_SIDEBAR lightTheme={lightTheme} darkTheme={darkTheme} />;

export const MyAppBar = (props) => (
  <AppBar {...props}>
    -<Typography flex="1" variant="h6" id="react-admin-title"></Typography>
    <TOGGLE_SIDEBAR lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);
