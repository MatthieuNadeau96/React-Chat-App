import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

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
            <Button style={friends}>
              <i className="fas fa-user-friends"></i>
            </Button>
            <Button style={options}>
              <i className="fas fa-ellipsis-v"></i>
            </Button>
          </div>
          <div className="room-title">Your Rooms</div>
          {orderedRooms.map(room => {
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <Button
                style={rooms}
                onClick={() => this.props.subscribeToRoom(room.id)}>
                <li
                  key={room.id}
                  className={"room " + active}
                  >
                  <a href="#">
                    # {room.name}
                  </a>
                </li>
              </Button>
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

const friends = {
  display: 'block',
  background: "inherit",
  padding: 0,
  height: 40,
  width: 40,
  borderRadius: "50%"
}
const options = {
  display: 'block',
  background: "inherit",
  padding: 0,
  height: 40,
  width: 40,
  borderRadius: "50%"
}
const rooms = {
  textAlign: 'right',
  width: '100%',
  borderRadius: 10
}

export default RoomList;
