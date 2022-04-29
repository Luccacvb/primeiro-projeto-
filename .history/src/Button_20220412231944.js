import * as React from 'react';

export const themes = {
  light: {
    background: 'white',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

export function setTheme(newTheme) {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
    localStorage.setItem('theme', newTheme); //Salva o tema escolhido no localStorage
  }
}

<input name="theme" type="checkbox" class="toggle-dark-mode" />;

export const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function ({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
});
