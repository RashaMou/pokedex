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

  // Main function to get Pokemon info from API
  const getPokemon = async (nameOrId) => {
    try {
      const mainInfo = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`
      );
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`
      );
      const typesArray = mainInfo.data.types.map((item) => {
        return item.type.name;
      });
      const statsArray = mainInfo.data.stats.map((item) => {
        return {
          name: item.stat.name,
          stat: item.base_stat,
        };
      });
      console.log(statsArray);
      setPokemon({
        threeNumberId: threeNumberId(mainInfo.data.id),
        id: mainInfo.data.id,
        name: mainInfo.data.name.toUpperCase(),
        height: mainInfo.data.height,
        weight: mainInfo.data.weight,
        image: mainInfo.data.sprites.front_default,
        color: setPokemonBackgroundColor(species.data.color.name),
        habitat: species.data.habitat.name,
        types: typesArray,
        stats: statsArray,
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
