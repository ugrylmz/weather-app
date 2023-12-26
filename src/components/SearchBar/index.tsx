import { useState } from 'react';
import Button from '../Button';
import SearchInput from '../SearchInput';
import { mockWeatherData } from '../../data/weatherData';

interface SearchBarProps {
    name: string;
    onSearch: (query: string) => void;
    setSearchResults: (results: any) => void;
  }
  

const SearchBar = ({name, onSearch, setSearchResults  }: SearchBarProps) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
      onSearch(query); // Update search results as user types
    };
  
    const handleButtonClick = () => {
        onSearch(searchQuery);  // Trigger the search functionality
        setSearchQuery('');  
        setSearchResults(mockWeatherData);  // Clear the input field
      };
    

    return (
        <div className='search-bar'>
           <SearchInput value={searchQuery} onChange={handleInputChange} />
            <Button
             name={name}
             buttonOnclick={handleButtonClick}
             />
        </div>
    )
}

export default SearchBar;