import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

export const Dashboard = (props) => (
  <Card {...props}>
    <CardHeader title="Welcome to the administration" />
    <CardContent> Welcome admin!!</CardContent>
  </Card>
);