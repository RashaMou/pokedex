import React from 'react';
import { render, fireEvent, within, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokemonCard from '../components/PokemonCard';
import {
  ThemeContext,
  WindowDimensionsContext,
  PokemonContext,
  ThemeContextProvider,
  WindowDimensionsProvider,
  PokemonContextProvider,
} from '../contexts';

const tree = (
  <WindowDimensionsProvider value={WindowDimensionsContext}>
    <ThemeContextProvider value={ThemeContext}>
      <PokemonContextProvider value={PokemonContext}>
        <PokemonCard />
      </PokemonContextProvider>
    </ThemeContextProvider>
  </WindowDimensionsProvider>
);

describe('Pokemon Card', () => {
  test('renders card without crashing', () => {
    render(tree);
  });

  test('displays Pokemon name', () => {
    const { getByTestId } = render(tree);
    getByTestId('pokemon-name');
  });
});
