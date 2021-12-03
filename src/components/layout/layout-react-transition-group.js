import React, { useState } from 'react';
import Menu from '../left-menu/Menu';

// import '../right-content/right-content.css';
import Transition from './transition';

import Theme from '../theme/ThemeContext';
import '../theme/theme.css';


const Layout = ({ children, location }) => {
  const [theme, setTheme] = useState('dark');
  const value = { theme, setTheme };

  console.log('Layout react transition group render ', location);

  return (
    <Theme.Provider value={value}>
      <Theme.Consumer>
        {(theme) => (
          <div className={`main ${theme.theme}`}>
            <Menu location={location} />
            <div className="right-content">
              <Transition location={location}>
                {children}
              </Transition>
            </div>
          </div>
        )}
      </Theme.Consumer>
    </Theme.Provider>
  );
};

export default Layout;