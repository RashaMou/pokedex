import React, { useContext } from 'react';
import ToggleTheme from './ToggleTheme';
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button';
import FlareIcon from '@material-ui/icons/Flare';
import { PokemonContext, WindowDimensionsContext } from '../contexts';

const Header = ({ breakpoint }) => {
  const { width } = useContext(WindowDimensionsContext);

  const { getPokemon, randomPokemon } = useContext(PokemonContext);
  return (
    <section className='header-banner'>
      <div className='banner-body'>
        <div className='toggle-search-container'>
          <ToggleTheme />
          {width > breakpoint ? <SearchBar /> : null}
        </div>
        <h1 className='header-title title is-1'>Pokedex</h1>

        <Button
          data-testid='random-button'
          variant='contained'
          startIcon={<FlareIcon />}
          className='button'
          onClick={() => getPokemon(randomPokemon)}
        >
          Random
        </Button>
      </div>
    </section>
  );
};

export default Header;
