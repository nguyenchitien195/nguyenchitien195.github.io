import React, { ReactElement } from 'react';
import Menu from '../left-menu/Menu_old';

const LayoutMenu = ({children}): ReactElement => {
  return(
    <>
      <Menu />
      {children}
    </>
  );
}

export default LayoutMenu;