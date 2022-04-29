// in src/App.js
import * as React from 'react';
import { Admin, Resource, Layout } from 'react-admin';
import { PostList, PostEdit, PostCreate, PostShow } from './posts';
import { UserList } from './users';
import { Comments } from './comments';
import { Albums } from './Album';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AlbumIcon from '@material-ui/icons/Collections';
import commentsIcon from '@material-ui/icons/Comment';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from 'ra-language-english';
import frenchMessages from 'ra-language-french';

import { MyAppBar } from './MyAppBar';

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const i18nProvider = polyglotI18nProvider(
  (locale) => (locale === 'fr' ? frenchMessages : englishMessages),
  'en', // Default locale
);

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}
    layout={MyLayout}
    i18nProvider={i18nProvider}
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
