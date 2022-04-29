import { SidebarToggleButton } from 'react-admin';

<input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />;

export const nightMode = document.querySelector('#night-mode');
// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  <SidebarToggleButton />;
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

// pegamos o valor no localStorage
export const nightModeStorage = localStorage.getItem('gmtNightMode');
// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('night-mode');

  // já deixa o input marcado como ativo
  nightMode.checked = true;
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('night-mode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true);
    return;
  }
  // senão remove
  localStorage.removeItem('gmtNightMode');
});
