/*
 * Context API manages theme switching and storing user theme to local storage.
 * ThemeContext is called in App.js to set global theme, in ToggleTheme.js to capture the toggled
 * state, and in SearchBar.js for Material UI specific theming.
 */

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
