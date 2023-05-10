import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieSearch from '../MovieSearch';

test('renders the search input', () => {
  render(<MovieSearch />);
  expect(screen.getByPlaceholderText('Search for a movie')).toBeInTheDocument();
});