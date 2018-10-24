import React from 'react';
import Button from '@material-ui/core/Button';

const NavBar = props => (
  <div className="navBar">
    <Button
      style={toggleRoom}
      onClick={props.drawerToggleClickHandler}>
      <i className="fas fa-bars"></i>
    </Button>
    <div className="roomTitle">{props.roomName}</div>
    <Button style={options}><i className="fas fa-ellipsis-v"></i></Button>
  </div>
);

const options = {
  display: 'block',
  background: "inherit",
  color: "white",
  padding: 0,
  height: 40,
  width: 40,
  borderRadius: "50%"
}

const toggleRoom = {
  display: 'block',
  background: "inherit",
  color: "white",
  padding: 0,
  height: 40,
  width: 40,
  borderRadius: "50%"
}

export default NavBar;
