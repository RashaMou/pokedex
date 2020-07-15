import React, { useEffect, useContext } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext, useWindowDimensions, ThemeContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { setPokemonBackgroundColor, capitalizeFirstLetter } from '../utils';
import ProgressBar from './ProgressBar';
import SearchBar from './SearchBar';

export default function PokemonCard({ breakpoint }) {
  const { width } = useWindowDimensions();
  const { getPokemon, pokemon } = useContext(PokemonContext);
  const { isDarkTheme } = useContext(ThemeContext);

  const getNext = async () => {
    getPokemon(pokemon.id + 1);
  };

  const getPrevious = async () => {
    await getPokemon(pokemon.id - 1);
  };

  // Load Pokemon with id=1 when component mounts
  useEffect(() => {
    getPokemon(1);
    const col = setPokemonBackgroundColor('black');
    console.log('col', col);
  }, []);

  // Link to higher quality Pokemon images than PokeApi sprite images.
  const pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  return (
    <div
      className={`${
        width > breakpoint ? 'card-container' : 'mobile-card-container'
      }`}
    >
      {width < breakpoint ? <SearchBar /> : null}
      {!pokemon ? (
        <img src={pokeball} alt='pokeball spinner' className='pokeball' />
      ) : (
        <div className={`${width > breakpoint ? 'card' : 'mobile-card'}`}>
          <div className='image-container'>
            <IconButton onClick={() => getPrevious()}>
              <NavigateBefore
                className={`${
                  width > breakpoint
                    ? 'nav-icon'
                    : !isDarkTheme
                    ? 'nav-icon'
                    : 'nav-icon-mobile-light'
                }`}
              />
            </IconButton>
            <img
              src={pokemonImage}
              alt={pokemon.name}
              className='pokemon-img'
            />
            <IconButton onClick={() => getNext()}>
              <NavigateNext
                className={`${
                  width > breakpoint
                    ? 'nav-icon'
                    : !isDarkTheme
                    ? 'nav-icon'
                    : 'nav-icon-mobile-light'
                }`}
              />
            </IconButton>
          </div>
          <div
            className={`${width > breakpoint ? 'info-bg' : 'info-bg-mobile'}`}
          >
            <div className='card-content'>
              <div
                className='card-header-background'
                style={{ background: pokemon.color }}
              >
                <div className='ball-container'>
                  <img
                    src={pokeball}
                    alt='pokeball'
                    className='pokeball-small'
                  />
                  <p className='poke-id'> {pokemon.threeNumberId}</p>
                </div>
                <h2 className='name'>{pokemon.name}</h2>
              </div>
              <div className='card-info-container'>
                <div className='height-weight-container'>
                  <div className='height-weight'>
                    <h3 className='info-title'>Height</h3>
                    <p>{pokemon.height} dm</p>
                  </div>
                  <div className='height-weight'>
                    <h3 className='info-title'>Weight</h3>
                    <p>{pokemon.weight} hg</p>
                  </div>
                </div>
                <div className='card-bottom-content'>
                  <div className='type-container'>
                    <h3 className='info-title'>Type</h3>
                    <div className='inner-type-container'>
                      {pokemon.types?.map((type, idx) => {
                        return (
                          <>
                            <img
                              src={require(`../assets/pokemonTypeIcons/${type}.png`)}
                              alt={type}
                              className='type'
                            />
                            <p>{type}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className='stats-container'>
                    <h3 className='info-title'>Stats</h3>
                    {pokemon.stats?.map((item, idx) => {
                      return (
                        <div key={idx} className='stats'>
                          <p>{capitalizeFirstLetter(item.name)}</p>
                          <ProgressBar stat={item.stat} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
