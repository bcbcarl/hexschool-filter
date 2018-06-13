import React from 'react';
import FormLabel from '@material-ui/core/es/FormLabel';
import FormControl from '@material-ui/core/es/FormControl';
import FormGroup from '@material-ui/core/es/FormGroup';
import FormControlLabel from '@material-ui/core/es/FormControlLabel';
import Typography from '@material-ui/core/es/Typography';
import { withStyles } from '@material-ui/core/es/styles';

import Checkbox from './Checkbox';

const styles = () => ({
  root: {
    margin: '1.8rem'
  },
  title: {
    fontSize: 20,
    margin: '1rem auto'
  }
});

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      entertainment: true,
      food: false,
      learning: false,
      outdoors: false
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    return event => {
      this.setState({ [name]: event.target.checked });
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <FormControl component="fieldset" className={classes.root}>
        <FormLabel component="legend">
          <Typography variant="title" className={classes.title}>
            Categories
          </Typography>
        </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.all}
                onChange={this.handleChange('all')}
                value="all"
              />
            }
            label="All"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.entertainment}
                onChange={this.handleChange('entertainment')}
                value="entertainment"
              />
            }
            label="Entertainment"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.food}
                onChange={this.handleChange('food')}
                value="food"
              />
            }
            label="Food"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.learning}
                onChange={this.handleChange('learning')}
                value="learning"
              />
            }
            label="Learning"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.outdoors}
                onChange={this.handleChange('outdoors')}
                value="outdoors"
              />
            }
            label="Outdoors"
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default withStyles(styles)(CategoryForm);
