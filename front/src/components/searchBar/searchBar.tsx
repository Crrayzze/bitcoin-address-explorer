import React, { useState } from 'react';
import "./searchBar.css"
import { FaSearch } from 'react-icons/fa';


interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <form className='search-form'>
        <input
          className='search-bar'
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className='search-button' onClick={handleSearch}>
          <FaSearch className='search-icon' />
        </button>
      </form>
    </div>
  );
};
