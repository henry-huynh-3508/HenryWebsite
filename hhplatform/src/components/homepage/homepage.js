import React from 'react';
import Navbar from './homepagecomponents/Navbar';
import SideDrawer from './homepagecomponents/Sidedrawer';
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
          <p>This is a test</p>
        </main>
      </div>
    );
  }
}
export default Homepage;
