// in src/App.js
import * as React from 'react';
import { Admin, Resource /*Layout*/ } from 'react-admin';
import { PostEdit, PostCreate, PostShow } from './posts';
import PostList from './posts';
import { UserList } from './users';
import Comments from './comments';
import Albums from './Album';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import commentsIcon from '@material-ui/icons/Comment';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
//import { MyAppBar } from './MyAppBar';

//const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
    //layout={MyLayout}
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
    <Resource name="Albums" list={Albums} icon={AlbumIcon} />
  </Admin>
);

export default App;
