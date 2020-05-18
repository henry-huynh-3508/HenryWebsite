import React from 'react';
import Navbar from './navbarcomponents/Navbar';
import SideDrawer from './navbarcomponents/Sidedrawer';
import Profile from './profile/profile';
import Aboutme from './aboutme/aboutme';
import './Homepage.css';
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
          </div>
        </main>
      </div>
    );
  }
}
export default Homepage;
