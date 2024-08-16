import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './styles/index.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Dashboard searchText={searchText} />
    </div>
  );
}

export default App;
