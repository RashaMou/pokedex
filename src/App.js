import React, { useContext, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`${!isDarkTheme ? 'lightTheme' : 'darkTheme'}`}>
      <Header />
      <PokemonCard />
    </div>
  );
}

export default App;
