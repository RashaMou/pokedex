import React, { useContext, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <div className={`${theme === 'light' ? 'lightTheme' : 'darkTheme'}`}>
      <Header />
      <PokemonCard />
    </div>
  );
}

export default App;
