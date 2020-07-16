/**************************************************************************
 * Return a random number between 1 and 964 to get random Pokemon
 * (the total number of pokemon in the pokeapi)
 **************************************************************************/

export const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(807));
};

/**************************************************************************
 * Fetcher function for react-query library
 **************************************************************************/

export const fetchAllPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000/`);
  const data = await response.json();
  return data;
};

/*****************************************************************************
 * Dynamically set the background color of the Pokemon card header
 * depending on the color returned from the api
 *****************************************************************************/

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
      'linear-gradient(180deg, rgba(212,83,143,1) 37%, rgba(223,152,186,1) 91%)',
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

/****************************************************************************
 * Change Pokemon ID number from 1 digit to 3 for stylistic purposes
 * e.g. 001, 092
 ****************************************************************************/

export const threeNumberId = (id) => {
  if (id < 10) {
    return '00' + id.toString();
  } else if (id < 100) {
    return '0' + id.toString();
  } else {
    return id;
  }
};

/****************************************************************************
 * Sanitize list of names that comes from calling /pokemon to exclude those
 * with dashes
 ****************************************************************************/

export const sanitizeData = (array) => {
  const sanitizedData = array.filter((name) => {
    return name.includes('-') === false;
  });
  return sanitizedData;
};

/****************************************************************************
 * Capitalize first letter
 ****************************************************************************/

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
