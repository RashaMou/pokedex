// utility function that returns a random number between 1 and 890 (the total number of pokemon images in https://pokeres.bastionbot.org)
// I'm using https://pokeres.bastionbot.org for images because the sprites in the pokeapi are very lo-res

const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(890));
};

export default getRandomNumber;
