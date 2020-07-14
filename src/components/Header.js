import React, { useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button';
import FlareIcon from '@material-ui/icons/Flare';
import { PokemonContext } from '../contexts';

const Header = () => {
  const { getPokemon, randomPokemon } = useContext(PokemonContext);
  return (
    <section className='header-banner'>
      <div className='banner-body'>
        <div className='toggle-search-container'>
          <ToggleTheme />
          <SearchBar />
        </div>
        <h1 className='header-title title is-1'>Pokedex</h1>

        <Button
          variant='contained'
          color='default'
          startIcon={<FlareIcon />}
          className='button'
          onClick={() => getPokemon(randomPokemon)}
        >
          Surprise me!
        </Button>
      </div>
    </section>
  );
};

export default Header;
