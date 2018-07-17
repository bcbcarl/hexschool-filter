import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import MapMarkerIcon from './icons/MapMarker';
import CalendarIcon from './icons/Calendar';

const styles = {
  root: {
    boxShadow: 'none',
    margin: '1.5rem auto'
  },
  media: {
    cursor: 'pointer',
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  content: {
    fontSize: 16,
    overflow: 'hidden',
    lineHeight: '1.5rem',
    height: '3rem'
  }
};

const Author = ({ name }) => (
  <span
    style={{
      fontFamily: 'Roboto',
      fontWeight: 'bolder',
      marginRight: '1rem'
    }}
  >
    {name}
  </span>
);

const Category = ({ label }) => (
  <span
    style={{
      cursor: 'pointer',
      color: '#fff',
      backgroundColor: '#d7d7d7',
      fontFamily: 'Roboto',
      fontStyle: 'italic',
      padding: '2px 1rem',
      borderRadius: '1rem'
    }}
  >
    {label}
  </span>
);

const MediaCard = ({
  classes,
  src,
  title,
  content,
  author,
  categories,
  location,
  period
}) => (
  <div>
    <Card className={classes.root} square>
      <CardMedia className={classes.media} image={src} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="headline"
          component="h2"
          style={{ color: '#9013fe', cursor: 'pointer' }}
        >
          {title}
        </Typography>
        <Typography component="p" className={classes.content}>
          {content}
        </Typography>
        <div style={{ margin: '1rem 0' }}>
          <Author name={author} />
          <Category label={categories} />
        </div>
        <Typography>
          <MapMarkerIcon />
          <span style={{ color: '#9b9b9b', marginLeft: '0.5rem' }}>
            {location}
          </span>
        </Typography>
        <Typography>
          <CalendarIcon type="outline" />
          <span style={{ color: '#9b9b9b', marginLeft: '0.5rem' }}>
            {period}
          </span>
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(MediaCard);
