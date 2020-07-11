import React, { useContext } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { ThemeContext } from '../contexts/ThemeContext';
import Switch from '@material-ui/core/Switch';
import useLocalStorage from '../hooks/useLocalStorage';

const ToggleTheme = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useLocalStorage(false);

  const iconChange = () => {
    setIcon(!icon);
  };

  const handleSwitch = () => {
    toggleTheme();
    iconChange();
  };

  return (
    <div className='toggle__box'>
      <span>
        {icon ? (
          <Brightness3Icon className='moon-icon' alt='moon icon' />
        ) : (
          <WbSunnyIcon className='sun-icon' alt='sun icon' />
        )}
      </span>
      <Switch
        checked={isDarkTheme}
        onChange={() => handleSwitch()}
        color='default'
      />
    </div>
  );
};

export default ToggleTheme;
