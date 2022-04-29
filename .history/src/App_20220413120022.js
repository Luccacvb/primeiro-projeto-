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
import { createTheme, setTheme } from '@material-ui/core/styles';

export const darkModeToggle = document.querySelector('input[name=theme]');
darkModeToggle.addEventListener('change', function ({ target }) {
  setTheme(target.checked ? 'dark' : 'light');
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

const theme = createTheme({
  palette: {
    type: 'light',
  },
});

export default App;
