import React, { Component } from 'react';
import './Portfolio.css';
export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <header className="portfolio_header">Portfolio</header>
        <div
          className="portfolio_title"
          onClick={() =>
            window.open(
              'https://reverehome.io',
              '_blank',
              '',
              'noopener noreferrer'
            )
          }
        >
          {' '}
          <img
            src={process.env.PUBLIC_URL + 'static/portfolio/revere.png'}
            alt="revere portfolio"
            className="portfolio_image"
          ></img>
          Revere Technologies Platform
        </div>

        <p className="portfolio_text">
          Revere Technologies Platform is a fully functional real estate
          platform that allows users to post their own listings for
          advertisement. The platform currently is hosting more than 300,000
          listings across entire Canada. I take pride in building the entire
          platform from the ground up with my team.
        </p>
        <div className="spacer"></div>
        <div
          className="portfolio_title"
          onClick={() =>
            window.open(
              'https://my.visme.co/projects/w4yjkry6-starcraft-survey-general-report',
              '_blank',
              '',
              'noopener noreferrer'
            )
          }
        >
          <img
            src={process.env.PUBLIC_URL + 'static/portfolio/starcraft2.png'}
            alt="sc2 portfolio"
            className="portfolio_image"
          ></img>
          StarCraft II Data Analysis Report
        </div>
        <p className="portfolio_text">
          StarCraft II Data Analysis Report is a report conducted by myself for
          Co-op community in StarCraft II game as a hobby project. This report
          is conducted to prove that there are balance’s issues with the current
          game mode. This report was well received by the community and it also
          triggered a set balance patches for the game mode from Blizzard.
        </p>
      </div>
    );
  }
}
