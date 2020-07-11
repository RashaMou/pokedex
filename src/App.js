import React, { useState } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <PokemonCard />
    </>
  );
}

export default App;
