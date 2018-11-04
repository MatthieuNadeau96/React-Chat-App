import React from 'react';

import Options from './Options';
import Button from '@material-ui/core/Button';

const OptionsMenu = props => {
  let menuClasses = ['optionsMenu'];

  if (props.open) {
    menuClasses = ['optionsMenu', 'optionsOpen'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <div className="optionMenuTitle">Options</div>
      <Options />
      <div className='doneButtonSection'>
        <Button
          onClick={props.backBtnClicked}
          style={backBtn}
          className="doneButton">
          Done
        </Button>
      </div>
    </div>
  )
}

const backBtn = {
  background: "#3E3EF4",
  color: "#fff",
  fontSize: 14,
  borderRadius: 3,
}

export default OptionsMenu;
