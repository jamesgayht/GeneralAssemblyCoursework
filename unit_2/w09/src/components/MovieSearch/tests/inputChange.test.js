import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieSearch from '../MovieSearch';

test('handles input change', () => {
  render(<MovieSearch />);
  const input = screen.getByPlaceholderText('Search for a movie');
  fireEvent.change(input, { target: { value: 'Test' } });
  expect(input.value).toBe('Test');
});