// in src/App.js
import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import PhotosIcon from '@material-ui/icons/Photo';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { createTheme } from '@material-ui/core/styles';
import { Layout, AppBar } from 'react-admin';
import { Box, Typography } from '@material-ui/core';
import { ToggleThemeButton } from '@react-admin/ra-preferences';

const MyAppBar = (props) => (
  <AppBar {...props}>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    <ToggleThemeButton />
  </AppBar>
);

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const theme = createTheme({
  palette: {
    type: 'light' || 'black',
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
    <Resource name="Albums" list={UserList} icon={AlbumIcon} />
    <Resource name="photos" list={UserList} icon={PhotosIcon} />
  </Admin>
);

export default App;
