import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieSearch from '../MovieSearch';
import { API_KEY } from '../config';

const mockResponse = {
  Search: [
    {
      Title: 'Test Movie',
      Year: '2022',
      imdbID: 'tt1234567',
      Type: 'movie',
      Poster: 'https://via.placeholder.com/150',
    },
  ],
};

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve(mockResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('fetches and displays movie data', async () => {
  render(<MovieSearch />);
  const input = screen.getByPlaceholderText('Search for a movie');
  
  let callCounter = 0;
  const fetchCallListener = () => {
    callCounter++;
    if (callCounter === 10) {
      expect(fetch).toHaveBeenCalledTimes(10);
      expect(fetch).toHaveBeenLastCalledWith(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Test Movie`);

    }
  };

  // Attach the listener to the fetch mock
  global.fetch = jest.fn().mockImplementation((...args) => {
    fetchCallListener();
    return Promise.resolve({ json: () => Promise.resolve(mockResponse) });
  });

  // Use a delay to simulate a real user typing
  await userEvent.type(input, 'Test Movie', { delay: 10 });

  await waitFor(() => expect(callCounter).toEqual(10));

  // Use a RegExp for the text matcher
  const movieTitle = await screen.findByText(/Test Movie/i);
  expect(movieTitle).toBeInTheDocument();
});
