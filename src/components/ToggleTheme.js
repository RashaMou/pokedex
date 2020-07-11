import React, { useContext } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { ThemeContext } from '../contexts/ThemeContext';
import useLocalStorage from '../hooks/useLocalStorage';

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useLocalStorage(false);

  const iconChange = () => {
    setIcon(!icon);
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
      <div className='toggle__btn'>
        <input
          type='checkbox'
          className='checkbox'
          onChange={iconChange}
          onClick={toggleTheme}
        />
        <div className='circle'></div>
        <div className='layer'></div>
      </div>
    </div>
  );
};

export default ToggleTheme;
