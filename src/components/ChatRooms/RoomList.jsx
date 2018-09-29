import React, { Component } from 'react';

class RoomList extends Component {

  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
    return (
      <div className="roomList child">
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
    );
  }

}

export default RoomList;
