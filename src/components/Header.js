import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
    return (
        <header className="app-header">
            <div className='text'>
            <h3>Home | </h3>
            <h1>Dashboard V2</h1>
            </div>
            <SearchBar onSearch={onSearch} />
        </header>
    );
};

export default Header;
