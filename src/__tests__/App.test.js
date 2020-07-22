import React, { useContext, ReactDOM } from 'react';
import { render, screen, getByTestId, cleanup } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard';
import App from '../App';
import {
  ThemeContext,
  WindowDimensionsContext,
  useWindowDimensions,
  ThemeContextProvider,
  WindowDimensionsProvider,
} from '../contexts';

function darkMode(isDarkMode) {
  return render(
    <ThemeContext.Provider value={isDarkMode}>
      <App />
    </ThemeContext.Provider>
  );
}

function providers(isDarkMode, width) {
  return render(
    <WindowDimensionsContext.Provider value={width}>
      <ThemeContext.Provider value={isDarkMode}>
        <App />
      </ThemeContext.Provider>
    </WindowDimensionsContext.Provider>
  );
}

test('renders with light mode by default', () => {
  providers(false, 750);
  expect(screen.getByTestId('themetest'))
    .toHaveStyle(`background: linear-gradient(
    180deg,
    rgba(255, 213, 78, 1) 36%,
    rgba(255, 255, 255, 1) 100%
  )`);
});
