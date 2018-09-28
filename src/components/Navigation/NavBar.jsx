import React from 'react';

import ToggleRoomButton from './ToggleRoomButton';

const NavBar = props => (
  <div className="navBar">
    <ToggleRoomButton click={props.drawerToggleClickHandler}/>
    <ul>
      <li>RoomName</li>
      <li><i className="fas fa-user-friends"></i></li>
      <li><i className="fas fa-ellipsis-v"></i></li>
    </ul>
  </div>
);

export default NavBar;
