import React from 'react';
import Toolbar from '@material-ui/core/es/Toolbar';
import { withStyles } from '@material-ui/core/es/styles';

import Logo from './Logo';
import SearchBar from './SearchBar';

const styles = () => ({
  root: {
    justifyContent: 'space-between'
  }
});

const ToolBar = ({ classes }) => (
  <Toolbar className={classes.root}>
    <Logo />
    <SearchBar placeholder="Explore your own activities" />
  </Toolbar>
);

export default withStyles(styles)(ToolBar);
