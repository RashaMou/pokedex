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
  }, []);

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
              className={`${slideIn === 'next' ? 'slide-right' : 'slide-left'}`}
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
