// in src/MyLayout.js
import { Layout } from 'react-admin';
import { WithInspector } from '@react-admin/ra-no-code';
import { MyAppbar } from './MyAppbar';

export const MyLayout = (props) => (
  <WithInspector {...props}>
    <Layout appBar={MyAppbar} {...props} />
  </WithInspector>
);
