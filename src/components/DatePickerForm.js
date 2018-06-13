import React from 'react';
import FormLabel from '@material-ui/core/es/FormLabel';
import FormControl from '@material-ui/core/es/FormControl';
import Typography from '@material-ui/core/es/Typography';
import Grid from '@material-ui/core/es/Grid';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import DatePicker from 'material-ui-pickers/DatePicker';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
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

class DatePickerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: new Date(2018, 4, 24),
      toDate: new Date(2018, 5, 1)
    };
    this.handleFromDateChange = this.handleFromDateChange.bind(this);
    this.handleToDateChange = this.handleToDateChange.bind(this);
  }

  handleFromDateChange(date) {
    this.setState({ fromDate: date });
  }

  handleToDateChange(date) {
    this.setState({ toDate: date });
  }

  render() {
    const { fromDate, toDate } = this.state;
    const { classes } = this.props;

    const Picker = ({ value, onChange, format }) => (
      <DatePicker
        showTodayButton
        value={value}
        onChange={onChange}
        format={format}
        animateYearScrolling={false}
      />
    );

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <FormControl component="fieldset" className={classes.root}>
          <FormLabel component="legend">
            <Typography variant="title" className={classes.title}>
              Date
            </Typography>
          </FormLabel>
          <Typography variant="subheading">
            <Grid container spacing={24} alignItems="center">
              <Grid item xs={3} style={{ textAlign: 'end' }}>
                from
              </Grid>
              <Grid item xs={9}>
                <Picker
                  value={fromDate}
                  onChange={this.handleFromDateChange}
                  format="YYYY/M/D"
                />
              </Grid>
            </Grid>
            <Grid container spacing={24} alignItems="center">
              <Grid item xs={3} style={{ textAlign: 'end' }}>
                to
              </Grid>
              <Grid item xs={9}>
                <Picker
                  value={toDate}
                  onChange={this.handleToDateChange}
                  format="YYYY/M/D"
                />
              </Grid>
            </Grid>
          </Typography>
        </FormControl>
      </MuiPickersUtilsProvider>
    );
  }
}

export default withStyles(styles)(DatePickerForm);
