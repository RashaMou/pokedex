import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import {
  ThemeContext,
  PokemonContextProvider,
  useWindowDimensions,
} from './contexts';
import { Route } from 'react-router-dom';

function App({ renderMobile, renderDesktop }) {
  const { isDarkTheme } = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  const breakpoint = 414;

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

  //`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`

  return (
    <PokemonContextProvider>
      <div className={classes()}>
        <Route path='/:id' component={PokemonCard} />
        <Header breakpoint={breakpoint} />
        <PokemonCard breakpoint={breakpoint} />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
