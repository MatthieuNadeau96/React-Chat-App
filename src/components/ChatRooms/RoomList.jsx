import React, { Component } from 'react';

import CreateRoomForm from './CreateRoomForm';
import CreateRoomButton from './CreateRoomButton';

class RoomList extends Component {

  state = {
    createRoomButtonClicked: false,
    roomName: ''
  }

  createRoomHandler = () => {
    this.setState({createRoomButtonClicked: !this.state.createRoomButtonClicked})
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    document.getElementById("createRoomForm").reset();
    this.setState({
      createRoomButtonClicked: !this.state.createRoomButtonClicked
    })
  }

  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
    return (
      <div className="roomList child">
        <div className="roomList-list">
          <div className="desktopNavBar">
            <i className="fas fa-user-friends"></i>
            <i className="fas fa-ellipsis-v"></i>
          </div>
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
          <CreateRoomForm
            createRoom={this.props.createRoom}
            createRoomButtonClicked={this.state.createRoomButtonClicked}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <CreateRoomButton
            clicked={this.createRoomHandler}
            createRoomButtonClicked={this.state.createRoomButtonClicked}
          />
        </div>
      </div>
    );
  }

}

export default RoomList;
