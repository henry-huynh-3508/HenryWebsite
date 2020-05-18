import React from 'react';
import './Skills.css';
import Techcard from './techcard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const skills = () => {
  return (
    <div>
      <header className="skills_header">Skills</header>
      <div className="skills_text">
        <p>I am highly efficient with these tech stacks</p>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
            <Grid item xs={3}>
              <Techcard stars={5}></Techcard>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default skills;
