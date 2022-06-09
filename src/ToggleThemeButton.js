import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/WbIncandescent';
import { Button } from 'react-admin';

const ToggleThemeButton = (props) => (
  <Button color=""
    onClick={(e) => {
      if (props.theme === 'light') {
        props.setTheme('dark');
      } else {
        props.setTheme('light');
      }
    }}
  >
    <LampIcon />
  </Button>
);
export default ToggleThemeButton;
