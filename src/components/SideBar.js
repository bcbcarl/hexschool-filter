import React from 'react';
import Divider from '@material-ui/core/es/Divider';
import Drawer from '@material-ui/core/es/Drawer';
import NativeSelect from '@material-ui/core/es/NativeSelect';
import { withStyles } from '@material-ui/core/es/styles';

import LocationForm from './LocationForm';
import DatePickerForm from './DatePickerForm';
import CategoryForm from './CategoryForm';

const styles = theme => ({
  root: {
    backgroundColor: '#ebebeb',
    position: 'relative',
    height: 'auto',
    width: 300
  },
  toolbar: theme.mixins.toolbar
});

const SideBar = ({ classes }) => (
  <Drawer variant="permanent" classes={{ paper: classes.root }}>
    <div className={classes.toolbar} />
    <LocationForm />
    <Divider />
    <DatePickerForm />
    <Divider />
    <CategoryForm />
    <Divider />
  </Drawer>
);

export default withStyles(styles)(SideBar);
