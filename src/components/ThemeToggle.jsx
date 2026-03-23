import React from 'react';

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label="Toggle Dark Mode"
    >
      <span className="icon">●</span>
    </button>
  );
};

export default ThemeToggle;
