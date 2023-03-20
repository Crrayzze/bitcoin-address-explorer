import React, { useState, useEffect } from 'react';
import './navigationBar.css';
import { SearchBar } from '../searchBar/searchBar';

interface NavigationBarProps {
  onSearch: (searchTerm: string) => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ onSearch }) => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scroll = window.pageYOffset;
    if (scroll > 20 && !scrolled) {
      setScrolled(true);
    } else if (scroll === 0 && scrolled) {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrolled])

  return (
    <nav className={'navigation-bar' + ' ' + (scrolled ? 'scrolled' : '')}>
      <div className='navigation-bar-center'>
        <SearchBar onSearch={onSearch} placeholder="Search Bitcoin Address..."/>
      </div>
    </nav>
  );
};