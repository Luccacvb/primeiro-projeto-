import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/WbIncandescent';

const lightTheme = {
  body: '#E2E2E2',
  text: '# 363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A,#79D7ED)',
};

const darkTheme = {
  body: ' #363536',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236,#1E215D)',
};

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button
      onClick={(e) => {
        if (props.theme === 'light') {
          props.setTheme('dark');
        } else {
          props.setTheme('light');
        }
      }}
    >
      {' '}
      <LampIcon />
    </button>
  </Typography>
);
export default ToggleThemeButton;
