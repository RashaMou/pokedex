import React from 'react';
import ToggleTheme from './ToggleTheme';
import SearchBar from './SearchBar';
import Button from '@material-ui/core/Button';
import FlareIcon from '@material-ui/icons/Flare';

const Header = () => {
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
        >
          Surprise me!
        </Button>
      </div>
    </section>
  );
};

export default Header;
