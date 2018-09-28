import React from 'react';

import MobileRoomList from '../ChatRooms/MobileRoomList';

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
        />
    </div>
  )
}

export default SideDrawer;
