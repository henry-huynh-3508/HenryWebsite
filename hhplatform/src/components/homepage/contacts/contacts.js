import React, { Component } from 'react';
import './Contacts.css';

import Grid from '@material-ui/core/Grid';
import { CardMedia, Card } from '@material-ui/core';

const PUBLIC_STATIC = process.env.PUBLIC_URL;
export default class Contacts extends Component {
  render() {
    return (
      <div>
        <header className="contacts_header">Contacts</header>
        <p className="contacts_text">
          Want to know more or just chat? Get a touch of me on LinkedIn or
          Github
        </p>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/hh-techlead/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + 'static/socialmedia/linkedin.png'}
                alt="github icon"
                className="contacts_image"
              ></img>
            </a>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
            <a
              className="linkedin"
              href="https://github.com/henry-huynh-3508"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={process.env.PUBLIC_URL + 'static/socialmedia/github.svg'}
                alt="github icon"
                className="contacts_image"
              ></img>
            </a>
          </Grid>
        </Grid>
      </div>
    );
  }
}
