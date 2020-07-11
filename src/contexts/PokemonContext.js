import React, { createContext, useState } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

export const PokemonContextProvider = (props) => {
  const [pokemon, setPokemon] = useState({});

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
    <PokemonContext.Provider value={{ getPokemon, pokemon }}>
      {props.children}
    </PokemonContext.Provider>
  );
};
