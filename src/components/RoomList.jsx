import React, { Component } from 'react';

class RoomList extends Component {

  render() {
    return (
      <div className="roomList child">
        <div className="room-title">Your Rooms:</div>
        {this.props.rooms.map(room => {
          return (
            <li key={room.id} className="room">
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
