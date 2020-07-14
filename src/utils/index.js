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

/******************************************
 * Pokemon Colors
 ******************************************/

const colors = [
  {
    name: 'red',
    gradient:
      'linear-gradient(180deg, rgba(247,71,67,1) 37%, rgba(241,132,130,1) 97%)',
  },
  {
    name: 'blue',
    gradient:
      'linear-gradient(180deg, rgba(85,115,153,1) 37%, rgba(129,151,179,1) 97%)',
  },
  {
    name: 'yellow',
    gradient:
      'linear-gradient(180deg, rgba(255,213,78,1) 37%, rgba(247,220,134,1) 94%)',
  },
  {
    name: 'green',
    gradient:
      'linear-gradient(180deg, rgba(80,148,73,1) 37%, rgba(119,175,117,1) 97%)',
  },
  {
    name: 'black',
    gradient:
      'linear-gradient(180deg, rgba(67,62,71,1) 37%, rgba(105,107,105,1) 97%)',
  },
  {
    name: 'brown',
    gradient:
      'linear-gradient(180deg, rgba(89,77,64,1) 37%, rgba(131,117,101,1) 97%)',
  },
  {
    name: 'purple',
    gradient:
      'linear-gradient(180deg, rgba(91,38,133,1) 37%, rgba(124,101,130,1) 97%)',
  },
  {
    name: 'gray',
    gradient:
      'linear-gradient(180deg, rgba(132,132,133,1) 37%, rgba(165,165,168,1) 97%)',
  },
  {
    name: 'white',
    gradient:
      'linear-gradient(180deg, rgba(228,228,236,1) 37%, rgba(246,241,241,1) 97%)',
  },
  {
    name: 'pink',
    gradient:
      'linear-gradient(180deg, rgba(221,18,109,1) 37%, rgba(179,131,152,1) 97%)',
  },
];

export const setPokemonBackgroundColor = (colorname) => {
  let col;
  colors.forEach((item) => {
    if (item.name === colorname) {
      col = item.gradient;
    }
  });
  return col;
};
