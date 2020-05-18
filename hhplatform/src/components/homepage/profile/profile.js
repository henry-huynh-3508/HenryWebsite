import React from 'react';
import './Profile.css';
const profile = () => {
  return (
    <div>
      <div className="profile">
        <p className="name">Huy Huynh</p>
        <p className="summary">
          <b>
            TechLead | Full Stack Developer| DevOps Engineer| Data Analyst |
            Edmonton, AB, Canada
          </b>
        </p>

        <p className="languages">
          VIETNAMESE <b>| ENGLISH</b>
        </p>
      </div>
      <img
        src={require('./profilepic.png')}
        alt="huy huynh"
        className="center"
      ></img>
    </div>
  );
};

export default profile;
