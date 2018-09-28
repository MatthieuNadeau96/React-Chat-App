import React from 'react';
import RoomList from './RoomList';

const RoomMenu = props => {
  let menuClasses = ['roomMenu'];

  if (props.show) {
    menuClasses = ['roomMenu', 'open'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <ul>
        <li>Hi</li>
        <li>Hello</li>
        <li>Hey</li>
      </ul>
    </div>
  )
};

export default RoomMenu;


// <RoomList
//   roomId={this.state.roomId}
//   subscribeToRoom={this.subscribeToRoom}
//   rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
//   />
