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

  return (
    <PokemonContextProvider>
      <div className={`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`}>
        <Route path='/:id' component={PokemonCard} />
        <Header breakpoint={breakpoint} />
        <PokemonCard breakpoint={breakpoint} />
      </div>
    </PokemonContextProvider>
  );
}

export default App;
