
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherList from '../components/WeatherList';
import Favorites from '../components/Favorites';
import './Dashboard.css'; 
import { mockWeatherData, WeatherData } from '../data/weatherData';

function Dashboard() {
    const [searchResults, setSearchResults] = useState<WeatherData[]>(mockWeatherData);
    const [favorites, setFavorites] = useState<WeatherData[]>(mockWeatherData.slice(0, 0));
    const [isCelsius, setIsCelsius] = useState<boolean>(true);

    const handleDegree = () => {
        setIsCelsius(!isCelsius);
      };

    const addToFavorites = (city: WeatherData) => {
        if (!favorites.some(fav => fav.cityId === city.cityId)) {
          setFavorites(prevFavorites => [...prevFavorites, city]);
        }
      };

      const removeFromFavorites = (cityId: number) => {
        setFavorites(prevFavorites => prevFavorites.filter(city => city.cityId !== cityId));
      };

      const handleSearch = (query: string) => {
        const lowerCaseQuery = query.toLowerCase();
        const result = query
          ? mockWeatherData.filter(city =>
              city.cityName.toLowerCase().includes(lowerCaseQuery) ||
              city.description.toLowerCase().includes(lowerCaseQuery) ||
              city.temperature.toString().includes(query) // Assuming temperature is a number
            )
          : mockWeatherData;
        setSearchResults(result);
      };
    
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Weather Dashboard</h1>
      </header>
      <SearchBar 
      name={'clear'} 
      onSearch={handleSearch} 
      setSearchResults={setSearchResults}
      />
      <div>
      <button className="degree-button" onClick={handleDegree} >
        Change to {isCelsius ? 'Fahrenheit': 'Celsius' }
        </button>
      </div>
      <WeatherList 
       data={searchResults}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        favorites={favorites}
        isCelsius={isCelsius}
       />
      <Favorites favorites={favorites} isCelsius={isCelsius} />
    </div>
  );
}

export default Dashboard;
