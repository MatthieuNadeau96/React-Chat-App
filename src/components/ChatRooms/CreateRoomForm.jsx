import React, { Component } from 'react';

class CreateRoomForm extends Component {

  render() {
    var className = this.props.createRoomButtonClicked ? "createRoomForm child show" : "createRoomForm hide"
    return (
      <form
        className={className}
        onSubmit={this.props.handleSubmit}>
        <input
          onChange={this.props.handleChange}
          type="text"
          placeholder="Create a new room"
          required
        />
      </form>
    );
  }

}

export default CreateRoomForm;
