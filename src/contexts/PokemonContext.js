/*
 * Context API manages API calls to PokeApi and storing the current Pokemon in state
 * It is called in the PokemonCard component and in the Header component ("Surprise Me button fetches a random Pokemon")
 */

import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getRandomNumber, setPokemonBackgroundColor } from '../utils';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonColor, setPokemonColor] = useState('');
  const randomPokemon = getRandomNumber();

  const getPokemon = async (nameOrId) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`
      );
      setPokemon({
        id: res.data.id,
        name: res.data.name.toUpperCase(),
        height: res.data.height,
        weight: res.data.weight,
        image: res.data.sprites.front_default,
      });
      const color = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-color/${nameOrId}/`
      );
      console.log(typeof color.data.name);
      const bgcolor = setPokemonBackgroundColor(color.data.name);
      console.log('bgcolor', bgcolor);
      setPokemonColor(bgcolor);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider
      value={{ getPokemon, pokemon, randomPokemon, pokemonColor }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};
