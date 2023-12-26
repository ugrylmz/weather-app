import React from 'react';
import { WeatherData } from '../../data/weatherData';
import './style.css'; // Assuming you have style.css in the same directory

interface FavoritesProps {
  favorites: WeatherData[]; // Specify that favorites is an array of WeatherData
  isCelsius: boolean;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, isCelsius }) => {
  return (
    <div className="favorites-section">
      <h2>Favourite Cities</h2>
      <ul>
        {favorites.map(city => {
          let temperature = city.temperature;
          if (!isCelsius) {
            temperature = parseFloat(((temperature * 9/5) + 32).toFixed(1));
          }

          return (
            <li key={city.cityId}>
              {city.cityName} - {temperature}{isCelsius ? '°C' : '°F'} - {city.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
