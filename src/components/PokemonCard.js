import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

export default function PokemonCard() {
  const [pokemon, setPokemon] = useState({});

  // load random Pokemon when component mounts
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/12/')
      .then((res) => {
        setPokemon({
          name: res.data.name,
          height: res.data.height,
          weight: res.data.weight,
          image: res.data.sprites.front_default,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='card-container'>
      <Card className='main-card'>
        <CardHeader title={pokemon.name} />
        {pokemon.image ? (
          <CardMedia component='img' src={pokemon.image} alt={pokemon.name} />
        ) : (
          <CircularProgress />
        )}

        <CardContent>
          <div className='navigation'>
            <NavigateBefore className='nav-icon' />
            <NavigateNext className='nav-icon' />
          </div>
          <div className='info-bg'>
            <Typography variant='body2' color='textSecondary' component='p'>
              <span>Height: {pokemon.height}</span>
              <span>Weight: {pokemon.weight}</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
