import { render } from '@testing-library/react';
import WeatherIcons from '../components/WeatherIcons';

test('WeatherIcons component should render with correct props', () => {
  const { getByAltText, getByText } = render(
    <WeatherIcons img="sunny.png" conditions="Sunny" time="8:00 AM" />
  );

  const img = getByAltText('Sunny');
  expect(img).toBeInTheDocument();
  expect(img.src).toContain('sunny.png');

  const conditions = getByText('Sunny');
  expect(conditions).toBeInTheDocument();

  const time = getByText('8:00 AM');
  expect(time).toBeInTheDocument();
});