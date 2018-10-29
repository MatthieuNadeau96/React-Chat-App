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
      <div className="optionMenuHeader">
        <Button
          onClick={props.backBtnClicked}
          style={backBtn}
          className="backButton">
          <i className="material-icons">arrow_back</i>
        </Button>
        <h2 className="optionMenuTitle">Options</h2>
          <Button
            className="invisibleBtn">
            hidden
          </Button>
      </div>
      <Options />
    </div>
  )
}

const backBtn = {
  display: 'block',
  background: "inherit",
  color: "#969CB6",
  padding: 0,
  height: 40,
  width: 40,
  fontSize: 25,
  borderRadius: "50%"
}

export default OptionsMenu;
