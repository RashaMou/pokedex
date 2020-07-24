/*
 * This component renders the icons for toggling the theme between light and dark.
 * Functionality for theming is encapsulated in ThemeContext.
 */

import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ThemeContext } from '../contexts';

const ToggleTheme = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
  return (
    <div className='toggle__box' data-testid='toggle-theme-button'>
      <IconButton
        onClick={() => toggleTheme()}
        data-testid='theme-toggle-button'
      >
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
