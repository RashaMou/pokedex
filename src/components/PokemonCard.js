import React, { useEffect, useState, useContext } from 'react';
import LazyLoad from 'react-lazyload';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { setPokemonBackgroundColor } from '../utils';

export default function PokemonCard() {
  const { getPokemon, pokemon } = useContext(PokemonContext);
  const [slideIn, setSlideIn] = useState('');

  const getNext = async () => {
    getPokemon(pokemon.id + 1);
    setSlideIn('next');
  };

  const getPrevious = async () => {
    await getPokemon(pokemon.id - 1);
    setSlideIn('previous');
  };

  // load first Pokemon when component mounts
  useEffect(() => {
    getPokemon(1);
    const col = setPokemonBackgroundColor('black');
    console.log('col', col);
  }, []);

  const pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  return (
    <div className='card-container'>
      {!pokemon ? (
        <img src={pokeball} alt='pokeball spinner' className='pokeball' />
      ) : (
        <div className='card'>
          <div style={styles.imageContainer}>
            <IconButton onClick={() => getPrevious()}>
              <NavigateBefore className='nav-icon' />
            </IconButton>
            <LazyLoad height={200} width={300}>
              <img
                src={pokemonImage}
                alt={pokemon.name}
                className='pokemon-img'
              />
            </LazyLoad>
            <IconButton onClick={() => getNext()}>
              <NavigateNext className='nav-icon' />
            </IconButton>
          </div>

          <div className='info-bg'>
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
              <div className='height-weight-container'>
                <div className='height-weight'>
                  <h3 className='info'>Height</h3>
                  <p>{pokemon.height}</p>
                </div>
                <div className='height-weight'>
                  <h3 className='info'>Weight</h3>
                  <p>{pokemon.weight}</p>
                </div>
              </div>
              <div className='card-bottom-content'>
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
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  imageContainer: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0 20px 0',
  },
};
