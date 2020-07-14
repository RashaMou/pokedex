import React, { useEffect, useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { setPokemonBackgroundColor } from '../utils';

export default function PokemonCard() {
  const { getPokemon, pokemon, pokemonColor } = useContext(PokemonContext);
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

  return (
    <div className='card-container'>
      {!pokemon ? (
        <img src={pokeball} alt='pokeball spinner' className='pokeball' />
      ) : (
        <div className='card'>
          <div className='img-container'>
            <IconButton onClick={() => getPrevious()}>
              <NavigateBefore className='nav-icon' />
            </IconButton>
            <img
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              className='pokemon-img'
            />
            <IconButton onClick={() => getNext()}>
              <NavigateNext className='nav-icon' />
            </IconButton>
          </div>

          <div className='info-bg'>
            <div className='card-content'>
              <div
                style={{
                  background: pokemonColor,
                  height: '100px',
                  width: '100%',
                  boxShadow:
                    '0 1px 1px rgba(0, 0, 0, 0.24), 0 4px 4px rgba(0, 0, 0, 0.12)',
                }}
              >
                <div className='ball-container'>
                  <img
                    src={pokeball}
                    alt='pokeball'
                    className='pokeball-small'
                  />
                  <p style={styles.pokeid}> {pokemon.id}</p>
                </div>
              </div>
              <h2>{pokemon.name}</h2>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className='typography'
              >
                <br />
                <span className='info'>Height: {pokemon.height}</span>
                <br />
                <span className='info'>Weight: {pokemon.weight}</span>
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  pokeid: {
    color: 'white',
    fontSize: '1.2rem',
  },
};
