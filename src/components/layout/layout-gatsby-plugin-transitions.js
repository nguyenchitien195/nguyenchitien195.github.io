import React, { useState } from "react";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Menu from '../left-menu/Menu';
import Theme, { getInitThemeMode } from '../theme/ThemeContext';
import './reset.css';
import '../theme/theme.css';
import 'semantic-ui-css/semantic.min.css';
import './right-content.css';
import './scrollbar.css';

const Layout = ({ location, children }) => {
  const [theme, setTheme] = useState(getInitThemeMode());
  const value = { theme, setTheme };

  console.log('layout plugin transition render')

  return (
    <Theme.Provider value={value}>
      <Theme.Consumer>
        {(theme) => (
          <div className={`main ${theme.theme}`}>
            <Menu />
            <TransitionProvider
              location={location}
              mode="successive"
              enter={{
                opacity: 0,
                transform: "translateY(1000px)",
                config: {
                  // mass: 1,
                  // tension: 210,
                  // friction: 20,
                  // clamp: true,
                  duration: 500
                },
              }}
              usual={{
                opacity: 1,
                transform: "translateY(0)"
              }}
              leave={{
                opacity: 0,
                transform: "translateX(100%)",
                config: {
                  duration: 500
                }
              }}
            >
              <div className="right-content">
                <TransitionViews>
                  {children}
                </TransitionViews>
              </div>
            </TransitionProvider>
          </div>
        )}
      </Theme.Consumer>
    </Theme.Provider>
  );
};

export default Layout;