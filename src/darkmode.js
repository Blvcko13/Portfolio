import { useState,useEffect } from 'react';
import './App.css'

const useDarkMode = () => {
  const getDarkModePreference = () => {
    return localStorage.getItem('darkMode') === 'true';
  };

  const [isDarkMode, setIsDarkMode] = useState(getDarkModePreference());

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
  };


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkMode;
