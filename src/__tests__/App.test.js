import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import {
  ThemeContext,
  WindowDimensionsContext,
  ThemeContextProvider,
  WindowDimensionsProvider,
} from '../contexts';

const tree = (
  <WindowDimensionsProvider value={WindowDimensionsContext}>
    <ThemeContextProvider value={ThemeContext}>
      <App />
    </ThemeContextProvider>
  </WindowDimensionsProvider>
);

describe('Theme', () => {
  test('renders with light mode by default', () => {
    render(tree);
    expect(screen.getByTestId('themetest'))
      .toHaveStyle(`background: linear-gradient(
      180deg,
      rgba(255, 213, 78, 1) 36%,
      rgba(255, 255, 255, 1) 100%
    )`);
  });

  test('button click changes theme to dark mode', () => {
    const container = render(tree);
    const button = container.queryByTestId('theme-toggle-button');
    fireEvent.click(button);
    expect(
      container.queryByTestId('themetest').classList.contains('darkTheme')
    ).toBe(true);
  });
});
