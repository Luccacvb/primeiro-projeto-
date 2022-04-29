import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { MyAppBar } from './MyAppBar';

export const Dashboard = (props) => (
  <Card {...props}>
    <MyAppBar />
    <CardHeader title="Welcome to the administration" />
    <CardContent> Welcome admin!!</CardContent>
  </Card>
);
