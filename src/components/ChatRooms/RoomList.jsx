import React, { Component } from 'react';

import CreateRoomForm from './CreateRoomForm';
import CreateRoomButton from './CreateRoomButton';

class RoomList extends Component {

  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
    return (
      <div className="roomList child">
        <div className="roomList-list">
          <div className="room-title">Your Rooms:</div>
          {orderedRooms.map(room => {
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room " + active}>
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  href="#"># {room.name}
                </a>
              </li>
            )
          })}
        </div>
        <CreateRoomButton />
        <CreateRoomForm createRoom={this.createRoom}/>
      </div>
    );
  }

}

export default RoomList;
