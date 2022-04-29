import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';

const ToggleThemeButton = (props) => (
  <Typography
    id="night-mode"
    class="lamp"
    type="checkbox"
    aria-label="night-mode"
  >
    {' '}
    <button onclick="Click()">
      {' '}
      <LampIcon />
    </button>
  </Typography>
);
document.documentElement.classList.toggle('night-mode');

export default ToggleThemeButton;
