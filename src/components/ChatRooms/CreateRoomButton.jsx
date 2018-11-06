import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CreateRoomButton extends Component {

  render() {
    var content = this.props.createRoomButtonClicked ? <i className="fas fa-times"/> : <i className="fas fa-plus"/>
    return (
      <div className="createRoomButton">
        <Button style={createRoom} onClick={this.props.clicked}>
          {content}
        </Button>
      </div>
    );
  }

}

const createRoom = {
  display: 'block',
  background: "inherit",  //primary font color
  boxShadow: 'none',
  textShadow: '0px 3px 6px rgba(0,0,0,0.5)',
  padding: 0,
  marginBottom: 20,
  height: 65,
  width: 65,
  borderRadius: 50
}

export default CreateRoomButton;
