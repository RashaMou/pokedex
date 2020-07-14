import React, { useEffect, useContext } from 'react';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { PokemonContext } from '../contexts';
import { IconButton } from '@material-ui/core';
import pokeball from '../assets/pokeball.png';
import { setPokemonBackgroundColor } from '../utils';
import ProgressBar from './ProgressBar';

export default function PokemonCard() {
  const { getPokemon, pokemon } = useContext(PokemonContext);

  const getNext = async () => {
    getPokemon(pokemon.id + 1);
  };

  const getPrevious = async () => {
    await getPokemon(pokemon.id - 1);
  };

  // Load Pokemon with id=1 when component mounts
  useEffect(() => {
    getPokemon(1);
    const col = setPokemonBackgroundColor('black');
    console.log('col', col);
  }, []);

  // Link to higher quality Pokemon images than PokeApi sprite images.
  const pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`;

  return (
    <div className='card-container'>
      {!pokemon ? (
        <img src={pokeball} alt='pokeball spinner' className='pokeball' />
      ) : (
        <div className='card'>
          <div style={styles.imageContainer}>
            <IconButton onClick={() => getPrevious()}>
              <NavigateBefore className='nav-icon' />
            </IconButton>
            <img
              src={pokemonImage}
              alt={pokemon.name}
              className='pokemon-img'
            />
            <IconButton onClick={() => getNext()}>
              <NavigateNext className='nav-icon' />
            </IconButton>
          </div>
          <div className='info-bg'>
            <div className='card-content'>
              <div
                className='card-header-background'
                style={{ background: pokemon.color }}
              >
                <div className='ball-container'>
                  <img
                    src={pokeball}
                    alt='pokeball'
                    className='pokeball-small'
                  />
                  <p className='poke-id'> {pokemon.threeNumberId}</p>
                </div>
                <h2 className='name'>{pokemon.name}</h2>
              </div>
              <div className='card-info-container'>
                <div className='height-weight-container'>
                  <div className='height-weight'>
                    <h3 className='info-title'>Height</h3>
                    <p>{pokemon.height} dm</p>
                  </div>
                  <div className='height-weight'>
                    <h3 className='info-title'>Weight</h3>
                    <p>{pokemon.weight} hg</p>
                  </div>
                </div>
                <div className='card-bottom-content'>
                  <div className='type-container'>
                    <h3 className='info-title'>Type</h3>
                    <div className='inner-type-container'>
                      {pokemon.types?.map((type, idx) => {
                        return (
                          <>
                            <img
                              src={require(`../assets/pokemonTypeIcons/${type}.png`)}
                              alt={type}
                              className='type'
                            />
                            <p>{type}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className='stats-container'>
                    <h3 className='info-title'>Stats</h3>
                    {pokemon.stats?.map((item, idx) => {
                      return (
                        <div key={idx} className='stats'>
                          <p>{item.name}</p>
                          <ProgressBar stat={item.stat} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  imageContainer: {
    width: '400px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0 20px 0',
  },
};
