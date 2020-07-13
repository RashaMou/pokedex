import React, { useEffect, useState, useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { useQuery } from 'react-query';
import { fetchPokemon } from '../utils';

export default function PokemonCard() {
  const [id, setId] = useState(1);
  const { status, data: pokemon } = useQuery(id, fetchPokemon);

  if (status === 'error') {
    return <div>Oops, something went wrong.</div>;
  }
  const getNext = async () => {
    setId(pokemon.id + 1);
  };

  const getPrevious = async () => {
    if (pokemon.id === 1) {
      return;
    } else {
      setId(pokemon.id - 1);
    }
  };

  return (
    <div className='card-container'>
      {status === 'loading' ? (
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
              <h2>{pokemon.name}</h2>
              <Typography
                variant='body2'
                color='textSecondary'
                component='p'
                className='typography'
              >
                <span className='poke-id'>#{pokemon.id}</span>
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
