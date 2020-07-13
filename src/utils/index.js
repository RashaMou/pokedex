import axios from 'axios';

/**************************************************************************
 * utility function that returns a random number between 1 and 807
 * (the total number of pokemon in the pokeapi)
 * I'm using https://pokeres.bastionbot.org for images because the sprites
 * in the pokeapi are very lo-res
 **************************************************************************/

export const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(807));
};

/******************************************
 * Fetcher utility functions for react-query library
 ******************************************/

export const fetcher = (...args) => {
  return fetch(...args).then((res) => res.json());
};

// setPokemon({
//   id: res.data.id,
//   name: res.data.name.toUpperCase(),
//   height: res.data.height,
//   weight: res.data.weight,
//   image: res.data.sprites.front_default,
// });
