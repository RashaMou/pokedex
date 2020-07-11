import React, { Component } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { ThemeContext } from '../contexts/ThemeContext';

class ToggleTheme extends Component {
  state = {
    icon: false,
  };

  iconChange = () => {
    this.setState({ icon: !this.state.icon });
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          return (
            <div className='toggle__box'>
              <span>
                {this.state.icon ? (
                  <Brightness3Icon className='moon-icon' alt='moon icon' />
                ) : (
                  <WbSunnyIcon className='sun-icon' alt='sun icon' />
                )}
              </span>
              <div className='toggle__btn'>
                <input
                  type='checkbox'
                  className='checkbox'
                  onChange={this.iconChange}
                />
                <div className='circle'></div>
                <div className='layer'></div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ToggleTheme;

//onClick={context.toggleTheme}
