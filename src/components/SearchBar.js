import React, { useState, useContext } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../contexts';
import { useQuery } from 'react-query';
import { fetchAllPokemon } from '../utils';

// Todo Add onlick to display Pokemon from search. If no Pokemon image is found from the nice ones, display the sprite.

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
  const [value, setValue] = useState('');

  const { classes } = props;

  const filterOptions = createFilterOptions({
    limit: 4,
    matchFrom: 'start',
  });

  return (
    <div style={{ width: '300px' }}>
      <Autocomplete
        onChange={(event, newValue) => {
          setValue(newValue);
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
