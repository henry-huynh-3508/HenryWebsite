import React from 'react';
import './SideDrawer.css';
import DrawerCloseButton from './DrawerCloseButton';
const SideDrawer = (props) => {
  let drawerClass = 'side-drawer';
  if (props.show) {
    drawerClass = 'side-drawer open';
  }
  return (
    <nav className={drawerClass}>
      <DrawerCloseButton
        className="closeIcon"
        click={props.drawerToggleClickHandler}
      ></DrawerCloseButton>
      <ul>
        <li>
          <a href="#profile">About me</a>
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
      <div className="languages">
        VIETNAMESE | <b>ENGLISH</b>
      </div>
    </nav>
  );
};

export default SideDrawer;
