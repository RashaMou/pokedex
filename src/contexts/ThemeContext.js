import React, { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useLocalStorage('light');
  const [icon, setIcon] = useLocalStorage(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, icon, setIcon }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
