import React from 'react';
import './Skills.css';
import skillsets from './skillsets';

import Techcard from './techcard';

import Grid from '@material-ui/core/Grid';

const Skills = () => {
  const skillsetcomponents = skillsets.map((skill) => (
    <Grid item xs={6} sm={6} md={4} lg={3} xl={2}>
      <Techcard
        className="techcard"
        photo={skill.photo}
        skill={skill.skill}
        stars={skill.efficiency}
      ></Techcard>
    </Grid>
  ));
  return (
    <div>
      <header className="skills_header">Skills</header>
      <div className="skills_text">
        <p>I am highly efficient with these tech stacks</p>
      </div>
      <div className="skills_cards">
        <div className="spacer"></div>
        <div>
          <Grid
            container
            spacing={6}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {skillsetcomponents}
          </Grid>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
};

export default Skills;
