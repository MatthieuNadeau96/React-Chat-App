import React from 'react';

import ToggleRoomButton from './ToggleRoomButton';

const NavBar = props => (
  <div className="navBar">
    <ToggleRoomButton click={props.drawerToggleClickHandler}/>
    <div className="roomTitle">{props.roomName}</div>
    <ul>
      <li><i className="fas fa-ellipsis-v"></i></li>
    </ul>
  </div>
);

export default NavBar;
