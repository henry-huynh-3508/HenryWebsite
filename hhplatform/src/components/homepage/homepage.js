import React from 'react';
import Navbar from './navbarcomponents/Navbar';
import SideDrawer from './navbarcomponents/Sidedrawer';
import Profile from './profile/profile';
import Aboutme from './aboutme/aboutme';
import Skills from './skills/skills';
import Portfolio from './portfolio/portfolio';
import './Homepage.css';
import Contacts from './contacts/contacts';
class Homepage extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Navbar
          drawerToggleClickHandler={this.drawerToggleClickHandler}
        ></Navbar>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          drawerToggleClickHandler={this.drawerToggleClickHandler}
        ></SideDrawer>
        <main style={{ marginTop: '88px' }}>
          <div className="main-content">
            <a class="anchor" id="profile">
              <Profile></Profile>
            </a>
            <a class="anchor" id="aboutme">
              <Aboutme></Aboutme>
            </a>
            <a class="anchor" id="skills">
              <Skills></Skills>
            </a>
            <div className="spacer-for-skils"></div>
            <a class="anchor" id="portfolio">
              <Portfolio></Portfolio>
            </a>
            <div className="spacer-for-skils"></div>
            <a class="anchor" id="contacts"></a>
            <Contacts></Contacts>
            <div className="spacer-for-skils"></div>
          </div>
        </main>
      </div>
    );
  }
}
export default Homepage;
