import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/WbIncandescent';

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button
      onClick={(e) => {
        if (props.theme === 'light') props.setTheme('dark');
      }}
    >
      {' '}
      <LampIcon />
    </button>
  </Typography>
);
export default ToggleThemeButton;
