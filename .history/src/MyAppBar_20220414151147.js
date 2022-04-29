import React from 'react';
import { AppBar } from 'react-admin';
import ToggleThemeButton from './ToggleThemeButton';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/Favorite';

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
      <LampIcon />
    </Typography>
    <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
  </AppBar>
);
