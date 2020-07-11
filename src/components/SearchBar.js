import React, { useState, useContext } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../contexts';

const styles = {
  rootDark: {
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

  inputDark: {
    color: 'white',
  },

  rootLight: {
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

  inputLight: {
    color: '#121212',
  },
};

const SearchBar = (props) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const [query, setQuery] = useState('');
  const { classes } = props;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <TextField
      label='Search'
      onChange={handleChange}
      className={`${isDarkTheme ? classes.rootDark : classes.rootLight}`}
      value={query}
      InputProps={{
        classes: {
          input: `${isDarkTheme ? classes.inputDark : classes.inputLight}`,
        },
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon
                className={`${
                  isDarkTheme ? classes.inputDark : classes.inputLight
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
