import React from 'react';

const SideDrawer = props => {
  let menuClasses = ['sideDrawer'];

  if (props.show) {
    menuClasses = ['sideDrawer', 'open'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      // Room Lists
    </div>
  )
}

export default SideDrawer;
