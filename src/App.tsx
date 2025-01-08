import { useState, FormEvent } from 'react';
import './App.css';

type WeatherData = {
  [key: string]: {
    temperature: string;
    humidity: string;
    windSpeed: string;
  };
};

const mockWeatherData: WeatherData = {
  'New York': { temperature: '22°C', humidity: '56%', windSpeed: '15 km/h' },
  'Los Angeles': {
    temperature: '27°C',
    humidity: '45%',
    windSpeed: '10 km/h',
  },
  London: { temperature: '15°C', humidity: '70%', windSpeed: '20 km/h' },
};

const mockWeatherDataNormalized = Object.fromEntries(
  Object.entries(mockWeatherData).map(([k, v]) => [k.toLowerCase(), v])
);

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weatherSearchQuery, setWeatherSearchQuery] = useState<string>('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedCity = city.toLowerCase();

    if (!normalizedCity.trim()) return;

    setWeatherSearchQuery(normalizedCity);

    if (
      !searchHistory.includes(normalizedCity) &&
      mockWeatherDataNormalized[normalizedCity]
    ) {
      setSearchHistory((prevSearchHistory) => [
        normalizedCity,
        ...prevSearchHistory,
      ]);
    }

    setCity('');
  };

  const handleCityClick = (cityName: string) => {
    setWeatherSearchQuery(cityName);
  };

  const cityWeather = mockWeatherDataNormalized[weatherSearchQuery];

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          id="citySearch"
          placeholder="Search for a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button id="searchButton" type="submit">
          Search
        </button>
      </form>
      <div id="weatherData">
        {cityWeather ? (
          <div>
            <div>Temperature: {cityWeather.temperature}</div>
            <div>Humidity: {cityWeather.humidity}</div>
            <div>Wind Speed: {cityWeather.windSpeed}</div>
          </div>
        ) : (
          weatherSearchQuery && <div>City not found.</div>
        )}
      </div>
      <div id="previousSearches">
        {searchHistory.map((city, index) => (
          <button key={index} onClick={() => handleCityClick(city)}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  return <WeatherDashboard />;
}

export default App;
