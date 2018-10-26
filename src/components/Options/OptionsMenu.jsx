import React from 'react';

const OptionsMenu = props => {
  let menuClasses = ['optionsMenu'];

  if (props.open) {
    menuClasses = ['optionsMenu', 'optionsOpen'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      hi
    </div>
  )
}

export default OptionsMenu;
