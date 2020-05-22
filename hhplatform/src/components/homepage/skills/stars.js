import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import './stars.css';
const Stars = (props) => {
  return (
    <div key="2323">
      <div className="star">
        {Array.from({ length: props.stars }, (item, index) => (
          <Star key={index}></Star>
        ))}
        {Array.from({ length: 5 - props.stars }, (item, index) => (
          <StarBorderIcon key={index} />
        ))}
      </div>
    </div>
  );
};
export default Stars;
