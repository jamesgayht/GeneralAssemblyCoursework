import weatherData from '../weatherData';

test('weatherData should have 5 elements', () => {
  expect(weatherData.length).toBe(5);
});

test('weatherData elements should have correct properties', () => {
  weatherData.forEach(weather => {
    expect(weather).toHaveProperty('img');
    expect(weather).toHaveProperty('conditions');
    expect(weather).toHaveProperty('time');
  });
});