import React from 'react';
import InputAdornment from '@material-ui/core/es/InputAdornment';
import TextField from '@material-ui/core/es/TextField';
import { withStyles } from '@material-ui/core/styles';

import SearchIcon from './icons/Search';

const styles = () => ({
  root: { width: 388 }
});

const SearchBar = ({ classes, placeholder }) => (
  <TextField
    className={classes.root}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      )
    }}
    placeholder={placeholder}
  />
);

export default withStyles(styles)(SearchBar);
