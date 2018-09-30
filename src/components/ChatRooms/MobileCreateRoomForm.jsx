import React, { Component } from 'react';

class MobileCreateRoomForm extends Component {

  state = {
    roomName: ''
  }

  handleChange = (e) => {
    this.setState({
      roomName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
  }

  render() {
    return (
      <form
        className="mobileCreateRoomForm child"
        onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Create a new room"
          required
        />
      </form>
    );
  }

}

export default MobileCreateRoomForm;
