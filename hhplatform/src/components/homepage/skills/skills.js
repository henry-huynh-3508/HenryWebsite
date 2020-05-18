import React from 'react';
import './Skills.css';
import Techcard from './techcard';
const skills = () => {
  return (
    <div>
      <header className="skills_header">Skills</header>
      <div className="skills_text">
        <p>I am highly efficient with these tech stacks</p>
      </div>
      <div className="techcard-items">
        <Techcard link={`./techimages/profilepic.png`}></Techcard>
      </div>
    </div>
  );
};

export default skills;
