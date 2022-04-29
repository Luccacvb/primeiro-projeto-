import html from './app.css';
import * as React from 'react';

const themes = {
  light: {
    background: 'white',
    text: 'black',
  },
  dark: {
    background: 'black',
    text: 'white',
  },
};

function setTheme(newTheme) {
  const themeColors = themes[newTheme]; // Seleciona o tema para aplicar

  // eslint-disable-next-line array-callback-return
  Object.keys(themeColors).map(function (key) {
    html.style.setProperty(`--${key}`, themeColors[key]); // Altera as variáveis no css
  });
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
    localStorage.setItem('theme', newTheme); //Salva o tema escolhido no localStorage
  }
}

<input name="theme" type="checkbox" class="toggle-dark-mode" />;

const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function ({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
});