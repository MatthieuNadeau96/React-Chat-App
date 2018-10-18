import React, { Component } from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import AnimateOnChange from 'react-animate-on-change'

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
    var content = this.props.createRoomButtonClicked ? "x" : "+"
    return (
      <div className="createRoomButton">
        <button onClick={this.props.clicked}> {content} </button>
      </div>
    );
  }

}

export default CreateRoomButton;
