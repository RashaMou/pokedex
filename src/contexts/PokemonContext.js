/*
 * Context API manages API calls to PokeApi and storing the current Pokemon in state
 * It is called in the PokemonCard component and in the Header component ("Surprise Me button fetches a random Pokemon")
 */

import React, { createContext, useState } from 'react';
import axios from 'axios';
import getRandomNumber from '../utils/getRandomNumber';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});
  const randomPokemon = getRandomNumber();

  const getPokemon = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setPokemon({
          id: res.data.id,
          name: res.data.name.toUpperCase(),
          height: res.data.height,
          weight: res.data.weight,
          image: res.data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PokemonContext.Provider value={{ getPokemon, pokemon, randomPokemon }}>
      {props.children}
    </PokemonContext.Provider>
  );
};
