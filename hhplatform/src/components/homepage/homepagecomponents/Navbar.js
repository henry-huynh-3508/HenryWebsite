import React from 'react';
import './Navbar.css';
import DrawerToggleButton from './DrawerToggleButton';
const Navbar = (props) => (
  <header>
    <nav className="navbar__navigation">
      <div>
        <DrawerToggleButton></DrawerToggleButton>
      </div>
      <div className="navbar__logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer"></div>
      <div className="navbar_navigation-items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About me</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
