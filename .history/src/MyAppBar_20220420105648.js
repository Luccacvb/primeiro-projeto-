import React from 'react';
import { AppBar } from 'react-admin';
import ToggleThemeButton from './ToggleThemeButton';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"

  },
  spacer: {
    <flex: 1
  }
});

export const MyAppBar = (props) => (
  <AppBar {...props}>
    <Typography flex="1" variant="h6" id="react-admin-title"></Typography>
    <ToggleThemeButton />
  </AppBar>
);
