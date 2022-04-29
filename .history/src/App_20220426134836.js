import React, { useState } from 'react';
import { Admin, Resource, Layout } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import Comments, { EditComment, CommentShow } from './comments';
import { AlbumList, AlbumShow } from './Album';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import commentsIcon from '@material-ui/icons/Comment';
import { Dashboard } from './Dashboard';
import authProvider from './authProvider';
import { MyAppBar } from './MyAppBar';
import { createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
});

const App = () => {
  const [theme, setTheme] = useState('light');
  console.log('theme!!!!!', theme, setTheme);

  const MyLayout = (props) => (
    <Layout
      {...props}
      appBar={(appBarProps) => {
        return <MyAppBar {...appBarProps} setTheme={setTheme} theme={theme} />;
      }}
    />
  );

  return (
    <Admin
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
      layout={MyLayout}
      disableTelemetry
      theme={theme === 'light' ? lightTheme : darkTheme}
    >
      <Resource name="dashboard" dashboard={Dashboard} />
      <Resource
        name="posts"
        show={PostShow}
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource name="users" list={UserList} icon={UserIcon} />
      <Resource
        name="comments"
        show={CommentShow}
        edit={EditComment}
        list={Comments}
        icon={commentsIcon}
      />
      <Resource
        name="Albums"
        list={AlbumList}
        show={AlbumShow}
        icon={AlbumIcon}
      />
      <Resource name="photos" />
    </Admin>
  );
};

export default App;
