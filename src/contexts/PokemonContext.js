/*
 * Context API manages API calls to PokeApi and storing the current Pokemon in state
 * It is called in the PokemonCard component and in the Header component ("Surprise Me button fetches a random Pokemon")
 */

import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  getRandomNumber,
  setPokemonBackgroundColor,
  threeNumberId,
} from '../utils';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});
  const randomPokemon = getRandomNumber();

  const getPokemon = async (nameOrId) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`
      );
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`
      );
      const typesArray = res.data.types.map((item) => {
        return item.type.name;
      });
      setPokemon({
        threeNumberId: threeNumberId(res.data.id),
        id: res.data.id,
        name: res.data.name.toUpperCase(),
        height: res.data.height,
        weight: res.data.weight,
        image: res.data.sprites.front_default,
        color: setPokemonBackgroundColor(species.data.color.name),
        habitat: species.data.habitat.name,
        types: typesArray,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokemonContext.Provider value={{ getPokemon, pokemon, randomPokemon }}>
      {props.children}
    </PokemonContext.Provider>
  );
};
