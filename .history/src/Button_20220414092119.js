import React from 'react';
import { ToggleThemeButton, AppBar, defaultTheme, useStore } from 'react-admin';
import { Typography, Button, Popover } from '@mui/material';

const HelpButton = () => {
  const [helpOpen, setHelpOpen] = useStore('help.open', false);
  return (
    <>
      <Button onClick={() => setHelpOpen((v) => !v)}>
        {helpOpen ? 'Hide' : 'Show'} help
      </Button>
      <Popover open={helpOpen} onClose={() => setHelpOpen(false)}>
        French
      </Popover>
    </>
  );
};

const darkTheme = {
  palette: { mode: 'dark' },
};

export const MyAppBar = (props) => (
  <AppBar {...props}>
    -<Typography flex="1" variant="h6" id="react-admin-title"></Typography>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);
