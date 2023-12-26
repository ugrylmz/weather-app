import {useEffect} from 'react';
import {WeatherData} from '../../data/weatherData';
import './style.css'

interface WeatherCardProps extends WeatherData {
    addToFavorites: (city: WeatherData) => void;
    removeFromFavorites: (cityId: number) => void;
    isFavorite: boolean; // New prop to determine if the city is a favorite
    isCelsius: boolean;
  }

const WeatherCard = ({
    cityId,
    cityName,
    description,
    temperature,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    isCelsius,
}: WeatherCardProps) => {
    const handleFavoriteClick = () => {
        const cityData = { cityId, cityName, description, temperature };
        if (isFavorite) {
          removeFromFavorites(cityId);
        } else {
          addToFavorites(cityData);
        }
      };
      if(!isCelsius) {
        temperature = parseFloat(((temperature * 9/5) + 32).toFixed(1));
      }


    useEffect(() => {
      console.log('useffect worked');

        return () => {
            console.log('unmount');
        }
    },[]);

    return (
        <tr className="weather-card" key={cityId} >
        <td>{cityName}</td>
        <td>{temperature} {isCelsius ? '°C' : '°F'}</td>
        <td>{description}</td>
        <td>
        <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      </td>
      </tr>
    )
};

export default WeatherCard;
