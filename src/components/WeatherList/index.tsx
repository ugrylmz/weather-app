
import WeatherCard from '../WeatherCard';
import {WeatherData} from '../../data/weatherData';
import './style.css'
// Define the props type
interface WeatherListProps {
    data: WeatherData[];
    addToFavorites: (city: WeatherData) => void;
    removeFromFavorites: (cityId: number) => void;
    favorites: WeatherData[];
    isCelsius: boolean;
  }


  const WeatherList: React.FC<WeatherListProps> = ({ data, addToFavorites, removeFromFavorites, favorites, isCelsius }) => {
    return (
        <div className="weather-list">
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <WeatherCard 
              key={item.cityId} 
              cityId={item.cityId}
              cityName={item.cityName}
              description={item.description}
              temperature={item.temperature}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={favorites.some(fav => fav.cityId === item.cityId)}
              isCelsius={isCelsius}
              />
            ))}
          </tbody>
        </table>
      </div>
    );

};

export default WeatherList;
