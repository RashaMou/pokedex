import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';

export default function PokemonCard() {
  return (
    <div className='card-container'>
      <Card className='main-card'>
        <CardHeader title='Pokemon name' />
        <CardMedia
          image='/static/images/cards/paella.jpg'
          title='Paella dish'
        />
        <CardContent>
          <div className='navigation'>
            <NavigateBefore className='nav-icon' />
            <NavigateNext className='nav-icon' />
          </div>
          <div className='info-bg'>
            <Typography variant='body2' color='textSecondary' component='p'>
              <p>Height:</p>
              <p>Weight:</p>
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
