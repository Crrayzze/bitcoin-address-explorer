import React from 'react';
import './App.css';
import { Router } from './pages/route';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { NavigationBar } from './components/navigationBar/navigationBar';

function App() {

  const navigate: NavigateFunction = useNavigate();

  function handleSearch(searchTerm: string): void {
    if (searchTerm.trim() !== '') {
      navigate(`/${searchTerm.trim()}`, { replace: true }) 
    }
  }

  return (
    <div>
      <NavigationBar onSearch={handleSearch} />
      <div className='main'>
        <Router />
      </div>
    </div>
  );
}

export default App;
