import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import getRandomNumber from '../utils/getRandomNumber';

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState({});
  const randomPokemon = getRandomNumber();

  const getPokemon = (id) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        setPokemon({
          id: res.data.id,
          name: res.data.name.toUpperCase(),
          height: res.data.height,
          weight: res.data.weight,
          image: res.data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNext = () => {
    getPokemon(pokemon.id + 1);
  };

  const getPrevious = () => {
    getPokemon(pokemon.id - 1);
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
              //   src={`https://pokeres.bastionbot.org/images/pokemon/${randomPokemon}.png`}
              src={pokemon.image}
              alt={pokemon.name}
            />
          ) : (
            <CircularProgress />
          )}
          <div className='navigation'>
            <NavigateBefore
              className='nav-icon'
              onClick={() => getPrevious()}
            />
            <NavigateNext className='nav-icon' onClick={() => getNext()} />
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
