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

export const fetchAllPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000/`);
  const data = await response.json();
  return data;
};

export const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};
