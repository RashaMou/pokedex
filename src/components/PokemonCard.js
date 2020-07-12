import React, { useEffect, useState, useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext } from '../contexts';
import { IconButton } from '@material-ui/core';

export default function PokemonCard() {
  const { getPokemon, pokemon, randomPokemon } = useContext(PokemonContext);
  const [slideIn, setSlideIn] = useState('');

  const getNext = async () => {
    await getPokemon(pokemon.id + 1);
    setSlideIn('next');
    console.log('slideIn', slideIn);
  };

  const getPrevious = async () => {
    await getPokemon(pokemon.id - 1);
    setSlideIn('previous');
    console.log('slideIn', slideIn);
  };

  // load random Pokemon when component mounts
  useEffect(() => {
    getPokemon(randomPokemon);
  }, []);

  return (
    <div className='card-container'>
      <Card className='card'>
        <CardHeader title={pokemon.name} />
        <CardContent className='card-content'>
          {pokemon.image ? (
            <CardMedia
              component='img'
              src={pokemon.image}
              alt={pokemon.name}
              className={`${slideIn === 'next' ? 'slide-right' : 'slide-left'}`}
            />
          ) : (
            <CircularProgress />
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
