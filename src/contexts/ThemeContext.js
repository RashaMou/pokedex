import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, setIsDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
