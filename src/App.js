import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import { ThemeContext, PokemonContextProvider } from './contexts';
import { Route } from 'react-router-dom';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`}>
      <PokemonContextProvider>
        <Route path='/:id' component={PokemonCard} />
        <Header />
        <PokemonCard />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
