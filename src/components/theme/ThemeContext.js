// theme.js
import React from 'react';

export const getInitThemeMode = () => {
  var themeName = 'dark';
  if (window.localStorage.getItem('theme-mode') === 'light') {
    themeName = 'light';
  }
  document.querySelector('body').setAttribute('class', themeName);
  return themeName;
}

const ThemeContext = React.createContext({
  theme: 'dark',
  setTheme: () => { }
});

export default ThemeContext;