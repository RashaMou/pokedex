import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext, PokemonContext } from '../contexts';
import { useQuery } from 'react-query';
import debounce from 'lodash.debounce';

const fetchAllPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000/`);
  const data = await response.json();
  console.log(data);
  return data;
};

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
  const { data } = useQuery('pokemons', fetchAllPokemon);
  const [poke, setPoke] = useState([]);

  const [query, setQuery] = useState('');
  const { classes } = props;

  useEffect(() => {
    if (data) {
      const characters = data.results.filter((character) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setPoke(characters);
    }
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
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
      <div>
        {query.length > 0 &&
          poke.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
      </div>
    </>
  );
};

export default withStyles(styles)(SearchBar);
