import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import './stars.css';
const Stars = (props) => {
  return (
    <div>
      <div className="star">
        {Array(props.stars).fill(<Star />)}
        {Array(5 - props.stars).fill(<StarBorderIcon />)}
      </div>
    </div>
  );
};
export default Stars;
