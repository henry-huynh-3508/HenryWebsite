import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './DrawerToggleButton';
const Navbar = (props) => (
  <header>
    <nav className="navbar__navigation">
      <div className="navbar_menubutton">
        <DrawerToggleButton
          click={props.drawerToggleClickHandler}
        ></DrawerToggleButton>
      </div>
      <div className="spacer"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
      <div className="spacer"></div>
    </nav>
    <div className="navbar_line"></div>
  </header>
);

export default Navbar;
