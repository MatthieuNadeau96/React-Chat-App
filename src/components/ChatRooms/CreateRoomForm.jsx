import React, { Component } from 'react';

class CreateRoomForm extends Component {

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
    var className = this.props.createRoomButtonClicked ? "createRoomForm child show" : "createRoomForm hide"
    return (
      <form
        className={className}
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

export default CreateRoomForm;
