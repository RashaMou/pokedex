import React, { useState, useContext } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete, { filterOptions } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext, PokemonContext } from '../contexts';

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

  const { classes } = props;

  return (
    <div style={{ width: '300px' }}>
      <Autocomplete
        onChange={(event, newValue) => {
          getPokemon(newValue);
        }}
        openOnFocus={false}
        onMouseDownCapture={(e) => e.stopPropagation()}
        id='search'
        filterOptions={filterOptions}
        options={data?.results.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
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
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon
                      className={`${
                        isDarkTheme
                          ? classes.inputDarkTheme
                          : classes.inputLightTheme
                      }`}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default withStyles(styles)(SearchBar);
