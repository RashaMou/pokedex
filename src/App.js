import React, { useContext } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import { ThemeContext, PokemonContextProvider } from './contexts';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`}>
      <PokemonContextProvider>
        <Header />
        <PokemonCard />
      </PokemonContextProvider>
    </div>
  );
}

export default App;
