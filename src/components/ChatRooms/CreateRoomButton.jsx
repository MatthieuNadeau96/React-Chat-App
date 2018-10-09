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

class CreateRoomButton extends Component {

  render() {
    return (
      <div>
        <RegularTooltip/>
      </div>
    );
  }

}

export default CreateRoomButton;
