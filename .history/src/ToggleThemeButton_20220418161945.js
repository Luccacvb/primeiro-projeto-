import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';
import setCount from '@material-ui/';

const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button onClick={() => setCount(lightTheme)}></button>
    <button onClick={() => setCount(darkTheme)}></button>
    <button onclick="Click(darkTheme)">
      {' '}
      <LampIcon />
      <lightTheme />
      <darkTheme />
    </button>
  </Typography>
);
export default ToggleThemeButton;
