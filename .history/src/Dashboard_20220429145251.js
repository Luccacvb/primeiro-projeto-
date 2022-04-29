import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/WbIncandescent';

export const Button = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button
      onClick={(e) => {
        if (props.theme === 'light') {
          props.setTheme('dark');
        } else {
          props.setTheme('light');
        }
      }}
    >
      {' '}
      <LampIcon />
    </button>
  </Typography>
);

export const Dashboard = (props) => (
  <Card {...props}>
    <CardHeader title="Welcome to the administration" />
    <CardContent> Welcome admin!!</CardContent>
  </Card>
);
