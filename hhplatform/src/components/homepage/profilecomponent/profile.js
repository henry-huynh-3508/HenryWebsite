import React from 'react';
import './Profile.css';
const profile = () => {
  return (
    <div>
      <ul className="profile-list">
        <li className="name">
          <p>Huy Huynh</p>
        </li>

        <li className="summary">
          <p>
            TechLead | Full Stack Developer| DevOps Engineer| Data Analyst 27
            years old, Edmonton, AB, Canada
          </p>
        </li>
        <li className="languages">
          <p>
            VIETNAMESE <b>| ENGLISH</b>
          </p>
        </li>
      </ul>
      <img
        src={require('./profilepic.png')}
        alt="Huy Huynh background"
        className="profilepic"
      ></img>
    </div>
  );
};

export default profile;
