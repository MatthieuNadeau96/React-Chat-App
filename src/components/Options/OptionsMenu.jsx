import React from 'react';

import Options from './Options';

const OptionsMenu = props => {
  let menuClasses = ['optionsMenu'];

  if (props.open) {
    menuClasses = ['optionsMenu', 'optionsOpen'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <h2 className="optionMenuTitle">Options</h2>
      <Options />
    </div>
  )
}

export default OptionsMenu;
