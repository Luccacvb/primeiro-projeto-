import * as React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import ToggleThemeButton from './ToggleThemeButton';

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent> Welcome admin!!</CardContent>
    <ToggleThemeButton />
  </Card>
);

export default Dashboard;
