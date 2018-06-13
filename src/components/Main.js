import React from 'react';
import Typography from '@material-ui/core/es/Typography';
import Chip from '@material-ui/core/es/Chip';
import { withStyles } from '@material-ui/core/es/styles';

import MediaCard from './MediaCard';

import fakePager from '../assets/fake-pager.png';
import image01 from '../assets/allef-vinicius-253985-unsplash.jpg';
import image02 from '../assets/yiran-ding-572142-unsplash.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 5
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginTop: -40
  }
});

const Main = ({ classes }) => (
  <main className={classes.root}>
    <div className={classes.toolbar} />
    <Typography variant="headline" style={{ marginTop: '1rem' }}>
      Showing <span style={{ color: '#9013fe', fontWeight: 500 }}>15</span>{' '}
      results by...
    </Typography>
    <div style={{ margin: '0.5rem auto' }}>
      <Chip
        label="Kaohsiung"
        onDelete={() => {}}
        style={{ marginRight: '0.5rem' }}
      />
      <Chip
        label="Entertainment"
        onDelete={() => {}}
        style={{ marginRight: '0.5rem' }}
      />
    </div>
    <MediaCard
      src={image01}
      title="Kogi Cosby sweater."
      content="Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo."
    />
    <MediaCard
      src={image02}
      title="In the tumultuous busin."
      content="Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo."
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <img src={fakePager} alt="fake pager" width="75%" height="75%" />
    </div>
  </main>
);

export default withStyles(styles)(Main);
