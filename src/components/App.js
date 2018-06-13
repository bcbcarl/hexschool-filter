import React from 'react';
import { withStyles } from '@material-ui/core/es/styles';

import AppBar from './AppBar';
import SideBar from './SideBar';
import Main from './Main';

const styles = () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  }
});

const App = ({ classes }) => (
  <div className={classes.root}>
    <AppBar />
    <SideBar />
    <Main />
  </div>
);

export default withStyles(styles)(App);
