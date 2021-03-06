import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import {
  ThemeContext,
  PokemonContextProvider,
  WindowDimensionsContext,
} from './contexts';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  const { width } = useContext(WindowDimensionsContext);

  const breakpoint = 700;

  // Conditional classnames to set background height according to theme and screen dimensions
  const classes = () => {
    if (isDarkTheme && width > breakpoint) {
      return 'darkTheme';
    } else if (isDarkTheme && width < breakpoint)
      return 'darkTheme background-mobile';
    else if (!isDarkTheme && width > breakpoint) {
      return 'lightTheme';
    } else if (!isDarkTheme && width < breakpoint)
      return 'lightTheme background-mobile';
  };

  return (
    <PokemonContextProvider>
      <div className={classes()} data-testid='themetest'>
        <Header breakpoint={breakpoint} />
        <PokemonCard breakpoint={breakpoint} />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
