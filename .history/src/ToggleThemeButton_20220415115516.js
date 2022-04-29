import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <input
      id="night-mode"
      class="lamp"
      type="checkbox"
      aria-label="night-mode"
    />
  </Typography>
);
const nightMode = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

export default ToggleThemeButton;
