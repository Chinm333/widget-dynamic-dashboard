import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        onSearch(searchText);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="🔍 Search anything..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className='outline-button' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
