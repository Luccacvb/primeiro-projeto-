import React from 'react';
import { AppBar } from 'react-admin';
import ToggleThemeButton from './ToggleThemeButton';
import Typography from '@material-ui/core/Typography';

export const MyAppBar = (props) => (
  <AppBar {...props}>
    <Typography flex="1" variant="h6" id="react-admin-title"></Typography>
  </AppBar>
);
