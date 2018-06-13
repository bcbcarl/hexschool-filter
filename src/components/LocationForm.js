import React from 'react';
import FormLabel from '@material-ui/core/es/FormLabel';
import FormControl from '@material-ui/core/es/FormControl';
import Typography from '@material-ui/core/es/Typography';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import NativeSelect from '@material-ui/core/es/NativeSelect';
import { withStyles } from '@material-ui/core/es/styles';

const styles = () => ({
  root: {
    margin: '1.8rem'
  },
  title: {
    fontSize: 20,
    margin: '1rem auto'
  }
});

const LocationForm = ({ classes }) => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel component="legend">
        <Typography variant="title" className={classes.title}>
          Location
        </Typography>
      </FormLabel>
      <NativeSelect value="taiwan">
        <option value="taiwan">Taiwan</option>
      </NativeSelect>
    </FormControl>
  </MuiPickersUtilsProvider>
);

export default withStyles(styles)(LocationForm);
