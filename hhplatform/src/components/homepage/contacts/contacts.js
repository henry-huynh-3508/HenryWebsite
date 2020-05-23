import React, { Component } from 'react';
import './Contacts.css';

import Grid from '@material-ui/core/Grid';

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
            <div
              className="portfolio_title"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/hh-techlead/',
                  '_blank',
                  '',
                  'noopener noreferrer'
                )
              }
            >
              {' '}
              <img
                src={process.env.PUBLIC_URL + 'static/socialmedia/linkedin.png'}
                alt="github icon"
                className="contacts_image"
              ></img>
            </div>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
            <div
              className="portfolio_title"
              onClick={() =>
                window.open(
                  'https://github.com/henry-huynh-3508',
                  '_blank',
                  '',
                  'noopener noreferrer'
                )
              }
            >
              <img
                src={process.env.PUBLIC_URL + 'static/socialmedia/github.svg'}
                alt="github icon"
                className="contacts_image"
              ></img>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
