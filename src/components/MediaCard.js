import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    boxShadow: 'none',
    margin: '1.5rem auto'
  },
  media: {
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

const MediaCard = ({ classes, src, title, content }) => (
  <div>
    <Card className={classes.root} square>
      <CardMedia className={classes.media} image={src} title={title} />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography component="p" className={classes.content}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default withStyles(styles)(MediaCard);
