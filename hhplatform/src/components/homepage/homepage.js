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
            <Profile></Profile>
            <Aboutme></Aboutme>
            <Skills></Skills>
            <div className="spacer-for-skils"></div>
            <Portfolio></Portfolio>
            <div className="spacer-for-skils"></div>
            <Contacts></Contacts>
            <div className="spacer-for-skils"></div>
          </div>
        </main>
      </div>
    );
  }
}
export default Homepage;
