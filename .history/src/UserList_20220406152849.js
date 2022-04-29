import * as React from 'react';
import {
  useRecordContext,
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  icon: {
    width: '0.5em',
    height: '0.5em',
    paddingLeft: 2,
  },
});

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  const classes = useStyles();
  return record ? (
    <a href={record[source]} className={classes.link}>
      {record[source]}
      <LaunchIcon className={classes.icon} />
    </a>
  ) : null;
};

export const UserShow = ({ permissions, ...props }) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="user.form.summary">
        {permissions === 'admin' && <TextField source="id" />}
        <TextField source="name" />
      </Tab>
      {permissions === 'admin' && (
        <Tab label="user.form.security">
          <TextField source="role" />
        </Tab>
      )}
    </TabbedShowLayout>
  </Show>
);

export default MyUrlField;
