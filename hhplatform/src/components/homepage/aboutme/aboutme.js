import React from 'react';
import './Aboutme.css';
const aboutme = () => {
  return (
    <div className="aboutme">
      <header className="header">About me</header>
      <div className="text">
        <p>
          Hi, I'm a TechLead | Full Stack Developer | DevOps Engineer | Data
          Analyst from Edmonton, Alberta.
        </p>
        <p>
          {' '}
          I'm interested in designing, building and operating software
          applications from end to end.
        </p>
        <p>
          I graduated with a Bachelor of Science in Computer Science at Macewan
          University. Currently, I’m the Techlead of Revere Technologies
          Company.
        </p>
        <p>I’m open to work on excellent projects with wonderful people.</p>
      </div>
    </div>
  );
};

export default aboutme;
