import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import { ThemeContext, PokemonContextProvider } from './contexts';
import { Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query-devtools';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`}>
      <PokemonContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Route path='/:id' component={PokemonCard} />
        <Header />
        <PokemonCard />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
