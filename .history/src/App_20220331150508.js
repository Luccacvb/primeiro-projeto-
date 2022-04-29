// in src/App.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import PhotosIcon from '@material-ui/icons/Photo';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    DataProvider={dataProvider}
    disableTelemetry
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="Albums" list={UserList} icon={AlbumIcon} />
    <Resource name="photos" list={UserList} icon={PhotosIcon} />
  </Admin>
);

export default App;
