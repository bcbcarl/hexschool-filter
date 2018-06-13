import React from 'react';
import MuiAppBar from '@material-ui/core/es/AppBar';
import { withStyles } from '@material-ui/core/es/styles';

import ToolBar from './ToolBar';

const styles = theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#7828b4',
    zIndex: theme.zIndex.drawer + 1
  }
});

const AppBar = ({ classes }) => (
  <MuiAppBar className={classes.root} position="absolute">
    <ToolBar />
  </MuiAppBar>
);

export default withStyles(styles)(AppBar);
