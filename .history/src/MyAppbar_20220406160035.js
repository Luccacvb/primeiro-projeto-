import { AppBar } from 'react-admin';
import { Typography } from '@material-ui/core';
import { PreferencesEditorButton } from '@react-admin/ra-no-code';

export const MyAppbar = (props) => (
  <AppBar {...props}>
    <Typography variant="h6" color="inherit" id="react-admin-title" />
    <span style={{ flex: 1 }} />
    <PreferencesEditorButton />
  </AppBar>
);
