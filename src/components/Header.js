import React from 'react';
import ToggleTheme from './ToggleTheme';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <section className='hero is-bold is-warning'>
      <div className='hero-body'>
        <div className='container'>
          <ToggleTheme />
          <SearchBar />
          <h1 className='header-title title is-1'>Pokedex</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
