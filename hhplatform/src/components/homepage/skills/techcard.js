import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Stars from './stars';
import './Techcard.css';

const Techcard = (props) => {
  return (
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="techcard-media"
          image={props.photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            style={{ textAlign: 'center' }}
            variant="h5"
            component="h2"
          >
            {props.skill}
          </Typography>
          <Stars stars={props.stars}></Stars>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Techcard;
