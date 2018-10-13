import React, { Component } from 'react';

import CreateRoomForm from './CreateRoomForm';
import CreateRoomButton from './CreateRoomButton';

class RoomList extends Component {

  state = {
    createRoomButtonClicked: false
  }

  createRoomHandler = () => {
    this.setState({createRoomButtonClicked: !this.state.createRoomButtonClicked})
  }

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
        <div className="createRoom">
          <CreateRoomForm createRoom={this.props.createRoom} createRoomButtonClicked={this.state.createRoomButtonClicked}/>
          <CreateRoomButton clicked={this.createRoomHandler} createRoomButtonClicked={this.state.createRoomButtonClicked}/>
        </div>
      </div>
    );
  }

}

export default RoomList;
