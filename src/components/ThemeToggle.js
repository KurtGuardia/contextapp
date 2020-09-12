import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isLightTheme } = React.useContext(ThemeContext);
  console.log(isLightTheme);

  return <button onClick={isLightTheme.toggleTheme}>Toggle the theme</button>;
};

export default ThemeToggle;
