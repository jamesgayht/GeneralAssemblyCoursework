import { render } from '@testing-library/react';
import App from '../App';
import weatherData from '../weatherData';

test('App component should render the correct number of WeatherIcons components', () => {
  const { container } = render(<App />);
  const weatherIcons = container.querySelectorAll('.weather-icon');
  expect(weatherIcons.length).toBe(weatherData.length);
});