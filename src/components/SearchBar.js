/**
 * Search bar element uses Material UI autocomplete component.
 * When app mounts, react-query library fetches and caches all
 * Pokemon names which the search can filter through and pass to the
 * getPokemon function that calls the API
 */

import React, { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import { ThemeContext, PokemonContext } from '../contexts';
import { fetchAllPokemon } from '../utils';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  rootDarkTheme: {
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },

  inputDarkTheme: {
    color: 'white',
  },

  rootLightTheme: {
    '& label': {
      color: '#121212',
    },
    '& label.Mui-focused': {
      color: '#121212',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#121212',
    },
  },

  inputLightTheme: {
    color: '#121212',
  },
};

const SearchBar = (props) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { getPokemon } = useContext(PokemonContext);
  const { data: pokemon } = useQuery('pokemon', fetchAllPokemon);
  const [query, setQuery] = useState('');

  const { classes } = props;

  // Limits autocomplete suggestions to 5 Pokemon
  // Starts matching from the start of the Pokemon name
  const filterOptions = createFilterOptions({
    limit: 5,
    matchFrom: 'start',
  });

  return (
    <div style={{ width: '300px' }}>
      <Autocomplete
        onChange={(event, value) => {
          getPokemon(value);
          setQuery('');
        }}
        onInputChange={(event, value) => setQuery(value)}
        openOnFocus={false}
        onMouseDownCapture={(e) => e.stopPropagation()}
        id='search'
        filterOptions={filterOptions}
        options={pokemon?.results.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            value={query}
            label='Search'
            margin='normal'
            className={`${
              isDarkTheme ? classes.rootDarkTheme : classes.rootLightTheme
            }`}
            InputProps={{
              ...params.InputProps,
              classes: {
                input: `${
                  isDarkTheme ? classes.inputDarkTheme : classes.inputLightTheme
                }`,
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default withStyles(styles)(SearchBar);
