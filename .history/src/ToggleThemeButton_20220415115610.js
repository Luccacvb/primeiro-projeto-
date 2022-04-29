import React from 'react';

<input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />;

const ToggleThemeButton = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
ToggleThemeButton.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

export default ToggleThemeButton;
