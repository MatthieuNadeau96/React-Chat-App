import React from 'react';

import MobileRoomList from '../ChatRooms/MobileRoomList';
import MobileCreateRoomForm from '../ChatRooms/MobileCreateRoomForm';

const SideDrawer = props => {
  let menuClasses = ['sideDrawer'];

  if (props.show) {
    menuClasses = ['sideDrawer', 'open'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <MobileRoomList
        roomId={props.id}
        subscribeToRoom={props.subToRoom}
        rooms={props.room}
        clicked={props.clicked}
        />
      <MobileCreateRoomForm createRoom={props.createRoom}/>
    </div>
  )
}

export default SideDrawer;
