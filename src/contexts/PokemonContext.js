/*
 * Context API manages API calls to PokeApi and storing the current Pokemon in state
 * It is called in the PokemonCard component and in the Header component ("Surprise Me button fetches a random Pokemon")
 */

import React, { createContext, useState } from 'react';
import axios from 'axios';
import {
  getRandomNumber,
  setPokemonBackgroundColor,
  threeNumberId,
  capitalizeFirstLetter,
} from '../utils';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});
  const randomPokemon = getRandomNumber();

  // Main function to get Pokemon info from API
  const getPokemon = async (nameOrId) => {
    try {
      // get Pokemon's main info
      const mainInfo = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${nameOrId}/`
      );
      // get species info
      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`
      );
      // get evolution info
      const evolution = await axios.get(species.data.evolution_chain.url);

      /*
       * getEvolvesTo and getEvolvedFrom make sure that the data fields
       * we're trying to get from the API are not null
       */

      const getEvolvesTo = () => {
        if (
          !species.data.evolves_from_species &&
          evolution.data.chain.evolves_to.length > 0
        ) {
          return evolution.data.chain.evolves_to[0].species.name;
        } else if (
          !species.data.evolves_from_species &&
          evolution.data.chain.evolves_to.length === 0
        ) {
          return null;
        } else if (
          species.data.evolves_from_species &&
          evolution.data.chain.evolves_to.length > 0
        ) {
          if (evolution.data.chain.evolves_to[0].evolves_to[0]) {
            if (
              evolution.data.chain.evolves_to[0].evolves_to[0].species.name ===
              mainInfo.data.name
            ) {
              return null;
            } else {
              return evolution.data.chain.evolves_to[0].evolves_to[0].species
                .name;
            }
          }
        }
      };

      const getEvolvedFrom = () => {
        if (species.data.evolves_from_species) {
          return species.data.evolves_from_species.name;
        } else {
          return null;
        }
      };

      const evolvesTo = getEvolvesTo();
      const evolvedFrom = getEvolvedFrom();

      /*
       * Types and stats returned as nested array objects.
       * These functions extract the required values from each into an array
       * that can be mapped over in the PokemonCard component
       */
      const typesArray = mainInfo.data.types.map((item) => {
        return item.type.name;
      });
      const statsArray = mainInfo.data.stats.map((item) => {
        return {
          name: item.stat.name,
          stat: item.base_stat,
        };
      });

      // set results to state
      await setPokemon({
        evolvedFrom: evolvedFrom,
        evolvesTo: evolvesTo,
        threeNumberId: threeNumberId(mainInfo.data.id),
        id: mainInfo.data.id,
        name: capitalizeFirstLetter(mainInfo.data.name),
        height: mainInfo.data.height,
        weight: mainInfo.data.weight,
        image: mainInfo.data.sprites.front_default,
        color: setPokemonBackgroundColor(species.data.color.name),
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
