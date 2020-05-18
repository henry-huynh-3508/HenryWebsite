import React from 'react';
import './Techcard.css';
import skills from './skillsets';
const techcard = (props) => {
  //const url = props.link;
  return (
    <div>
      <img src={skills[0].photo} alt="huy huynh" className="center"></img>
      <div className="techcard"></div>
    </div>
  );
};

export default techcard;
