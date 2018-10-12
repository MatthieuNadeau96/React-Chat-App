import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

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
    return (
      <div className="createRoomButton">
        <button onClick={this.props.clicked}> + </button>
      </div>
    );
  }

}

export default CreateRoomButton;
