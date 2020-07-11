// utility function that returns a random number between 1 and 964 (the total number of pokemon in the pokeapi)

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(964));
};

export default getRandomNumber;
