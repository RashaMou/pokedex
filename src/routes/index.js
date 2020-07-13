import React from 'react';
import { Route } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';

const Routes = () => {
  return <Route path='/:id' component={PokemonCard} />;
};

export default Routes;
