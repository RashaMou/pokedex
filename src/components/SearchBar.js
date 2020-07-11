import React, { useState, useContext } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
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

  const [query, setQuery] = useState('');
  const { classes } = props;

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <TextField
      label='Search'
      onChange={handleChange}
      className={`${
        isDarkTheme ? classes.rootDarkTheme : classes.rootLightTheme
      }`}
      value={query}
      InputProps={{
        classes: {
          input: `${
            isDarkTheme ? classes.inputDarkTheme : classes.inputLightTheme
          }`,
        },
        endAdornment: (
          <InputAdornment onClick={() => getPokemon(query)}>
            <IconButton>
              <SearchIcon
                className={`${
                  isDarkTheme ? classes.inputDarkTheme : classes.inputLightTheme
                }`}
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default withStyles(styles)(SearchBar);
