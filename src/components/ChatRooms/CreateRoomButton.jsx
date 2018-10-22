import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import Button from '@material-ui/core/Button';

const RegularTooltip = () => (
  <Tippy
    content="Create a New Room"
    arrow="true"
    animation="scale"
    inertia="true">
    <button>+</button>
  </Tippy>
)
// removed tippy for now
class CreateRoomButton extends Component {

  render() {
    var content = this.props.createRoomButtonClicked ? <i class="fas fa-times"/> : <i class="fas fa-plus"/>
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
  background: "#969CB6",  //primary font color
  padding: 0,
  height: 40,
  width: "100%"
}

export default CreateRoomButton;
