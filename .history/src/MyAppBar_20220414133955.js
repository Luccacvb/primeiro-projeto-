import React from 'react';
import { AppBar, defaultTheme } from 'react-admin';
import ToggleThemeButton from './ToggleThemeButton';
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

export const MyAppBar = (props) => (
  <AppBar {...props}>
    <Typography flex="1" variant="h6" id="react-admin-title">
      botao
    </Typography>
  </AppBar>
);
