import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

export const Dashboard = (props) => (
  <Card {...props}>
    <CardHeader> Welcome to the administration</CardHeader>
    <CardContent> Welcome admin!!</CardContent>
  </Card>
);