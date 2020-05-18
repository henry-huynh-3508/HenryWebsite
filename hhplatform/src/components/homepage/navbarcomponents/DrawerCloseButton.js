import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './DrawerCloseButton.css';
class DrawerCloseButton extends Component {
  render() {
    return (
      <div className="closeIcon" onClick={this.props.click}>
        <CloseIcon></CloseIcon>
      </div>
    );
  }
}

export default DrawerCloseButton;
