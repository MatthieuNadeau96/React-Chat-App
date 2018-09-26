import React, { Component } from 'react';

class RoomList extends Component {

  render() {
    return (
      <div className="roomList child">
        {this.props.rooms.map(room => {
          return (
            <li key={room.id} className="room">
              <a href="#"># {room.name}</a>
            </li>
          )
        })}
      </div>
    );
  }

}

export default RoomList;
