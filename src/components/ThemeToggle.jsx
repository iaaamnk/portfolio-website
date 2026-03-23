import React from 'react';

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button 
      className="theme-toggle hover-target" 
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="icon"></span>
    </button>
  );
};

export default ThemeToggle;
