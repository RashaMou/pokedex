import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleTheme = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
  return (
    <div className='toggle__box'>
      <IconButton onClick={() => toggleTheme()}>
        {isDarkTheme ? (
          <Brightness4Icon className='moon-icon' alt='moon icon' />
        ) : (
          <Brightness7Icon className='sun-icon' alt='sun icon' />
        )}
      </IconButton>
    </div>
  );
};

export default ToggleTheme;
