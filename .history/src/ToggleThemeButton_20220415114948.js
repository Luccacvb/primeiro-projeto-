import React from 'react';
import Typography from '@material-ui/core/Typography';
import LampIcon from '@material-ui/icons/InvertColors';
<input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />;
const nightMode = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

const ToggleThemeButton = (props) => (
  <Typography flex="1" variant="h6" id="react-admin-title">
    {' '}
    <button onclick="myFunction()">
      {' '}
      <LampIcon />
    </button>
  </Typography>
);

export default ToggleThemeButton;
