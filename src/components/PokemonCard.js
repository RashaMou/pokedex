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

const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

export default function PokemonCard() {
  const [id, setId] = useState(1);
  const { status, data: pokemon } = useQuery(id, fetchPokemon);

  if (status === 'loading') {
    return <img src={pokeball} alt='pokeball spinner' className='pokeball' />;
  }

  if (status === 'error') {
    return <div>Oops, something went wrong.</div>;
  }
  const getNext = async () => {
    setId(id + 1);
  };

  const getPrevious = async () => {
    setId(id - 1);
  };

  return (
    <div className='card-container'>
      <Card className='card'>
        <CardHeader title={pokemon.name} />
        <CardContent className='card-content'>
          {pokemon ? (
            <CardMedia
              component='img'
              src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
          ) : (
            <img src={pokeball} alt='pokeball spinner' className='pokeball' />
          )}
          <div className='navigation'>
            <IconButton onClick={() => getPrevious()}>
              <NavigateBefore className='nav-icon' />
            </IconButton>
            <IconButton onClick={() => getNext()}>
              <NavigateNext className='nav-icon' />
            </IconButton>
          </div>
          <div className='info-bg'>
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
        </CardContent>
      </Card>
    </div>
  );
}
