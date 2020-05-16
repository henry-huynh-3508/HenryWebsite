import React from 'react';
import Navbar from './homepagecomponents/Navbar';
import SideDrawer from './homepagecomponents/Sidedrawer';
const Homepage = () => {
  return (
    <div style={{ height: '100%' }}>
      <Navbar></Navbar>
      <SideDrawer></SideDrawer>
      <p>This is a test</p>
    </div>
  );
};
export default Homepage;
