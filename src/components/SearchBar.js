import React, { useState, useContext } from 'react';
import { useQuery } from 'react-query';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext, PokemonContext } from '../contexts';
import { fetchAllPokemon } from '../utils';

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

  const filterOptions = createFilterOptions({
    limit: 4,
    matchFrom: 'start',
  });

  return (
    <div style={{ width: '300px' }}>
      <Autocomplete
        onChange={(event, value) => {
          getPokemon(value);
          setQuery('');
        }}
        // selectOnFocus={true}
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
