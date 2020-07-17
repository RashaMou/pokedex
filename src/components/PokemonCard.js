import React, { useEffect, useContext } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext, useWindowDimensions, ThemeContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { capitalizeFirstLetter } from '../utils';
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

  const getEvolvedFrom = async () => {
    await getPokemon(pokemon.evolvedFrom);
  };

  const getEvolvesTo = async () => {
    await getPokemon(pokemon.evolvesTo);
  };

  // Load Pokemon with id=1 when component mounts
  useEffect(() => {
    getPokemon(1);
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
      <div className={`${width > breakpoint ? 'card' : 'mobile-card'}`}>
        <div className='image-container'>
          {!pokemon.image ? (
            <img src={pokeball} alt='pokeball' className='pokeball' />
          ) : (
            <>
              <div className='main-image'>
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
                  src={pokemon.image}
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
              <h4
                className='info-title'
                style={{
                  marginBottom: 0,
                  textAlign: 'center',
                  marginTop: '1rem',
                }}
              >
                Evolution
              </h4>
              <div
                className={`${
                  width > breakpoint ? 'evolution' : 'mobile-evolution'
                }`}
              >
                <div className='evolved'>
                  {pokemon.evolvedFrom !== null ? (
                    <>
                      <IconButton onClick={() => getEvolvedFrom()}>
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
                      <p>{pokemon.evolvedFrom}</p>
                    </>
                  ) : null}
                </div>
                <div className='evolved'>
                  {pokemon.evolvesTo !== null ? (
                    <>
                      <IconButton onClick={() => getEvolvesTo()}>
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
                      <p>{pokemon.evolvesTo}</p>
                    </>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={`${width > breakpoint ? 'info-bg' : 'info-bg-mobile'}`}>
          <div className='card-content'>
            <div
              className='card-header-background'
              style={{ background: pokemon.color }}
            >
              <div className='ball-container'>
                <img src={pokeball} alt='pokeball' className='pokeball-small' />
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
                        <div key={idx + 20}>
                          <img
                            key={idx + 22}
                            src={require(`../assets/pokemonTypeIcons/${type}.png`)}
                            alt={type}
                            className='type'
                          />
                          <p key={idx + 21}>{capitalizeFirstLetter(type)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className='stats-container'>
                  <h3 className='info-title'>Stats</h3>
                  {pokemon.stats?.map((item, idx) => {
                    return (
                      <div key={idx + 25} className='stats'>
                        <p key={idx + 23}>{capitalizeFirstLetter(item.name)}</p>
                        <ProgressBar key={idx + 26} stat={item.stat} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
