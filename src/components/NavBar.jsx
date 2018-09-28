import React from 'react';

import ToggleRoomButton from './ToggleRoomButton';

const NavBar = props => (
  <div className="navBar">
    <ToggleRoomButton click={props.drawerToggleClickHandler}/>
    <ul>
      <li>RoomName</li>
      <li>Friends</li>
      <li>Options</li>
    </ul>
  </div>
);

export default NavBar;
