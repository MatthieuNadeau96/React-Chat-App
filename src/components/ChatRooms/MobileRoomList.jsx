import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

const friends = {
  display: 'block',
  color: '#969CB6',
  background: "inherit",
  padding: 0,
  height: 40,
  width: 40,
  borderRadius: "50%",
  marginRight: 0
}

class MobileRoomList extends Component {

  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
    return (
      <div className="mobileRoomList child">
        <Button style={friends}>
          <div className="mobileFriends">
            <i className="fas fa-user-friends"></i>
          </div>
        </Button>
        <div className="room-title">Your Rooms</div>
        {orderedRooms.map(room => {
          const active = this.props.roomId === room.id ? "active" : "";
          return (
            <li
              key={room.id}
              className={"room " + active}
              onClick={this.props.clicked}>
              <a
                onClick={() => {
                  this.props.subscribeToRoom(room.id);
                }}
                href="/"># {room.name}
              </a>
            </li>
          )
        })}
      </div>
    );
  }

}

export default MobileRoomList;
