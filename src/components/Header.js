import React from 'react';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <section className='hero is-bold is-warning'>
      <div className='hero-body'>
        <div className='container'>
          <ToggleTheme />
          <h1 className='header-title title is-1'>Pokedex</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
