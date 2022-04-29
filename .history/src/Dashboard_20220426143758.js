import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Datagrid } from 'react-admin';

export const Dashboard = (props) => (
  <Card {...props}>
    <CardHeader title="Welcome to the administration" />
    <CardContent> Welcome admin!!</CardContent>
    <Datagrid> </Datagrid>
  </Card>
);
