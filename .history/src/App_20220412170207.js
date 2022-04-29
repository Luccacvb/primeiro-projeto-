// in src/App.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import { Comments } from './comments';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import commentsIcon from '@material-ui/icons/Comment';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { createTheme } from '@material-ui/core/styles';

<input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />;

const nightMode = document.querySelector('#night-mode');

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('night-mode');
});

// pegamos o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode');

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

const theme = createTheme({
  palette: {
    type: 'light',
  },
});
const App = () => (
  <Admin
    theme={theme}
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
    disableTelemetry
  >
    <Resource
      name="posts"
      show={PostShow}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="comments" list={Comments} icon={commentsIcon} />
    <Resource name="Albums" list={UserList} icon={AlbumIcon} />
  </Admin>
);

export default App;
