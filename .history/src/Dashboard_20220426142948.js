import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';

export const Dashboard = (props) => (
  <Card {...props}>
    <Title title="Welcome to the administration" />
    <CardContent>Welcome admin!!</CardContent>
  </Card>
);
