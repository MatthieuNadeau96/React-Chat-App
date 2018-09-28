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
    return (
      <div className="createRoomForm child">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Newroom"
            required
          />
        </form>
      </div>
    );
  }

}

export default CreateRoomForm;
