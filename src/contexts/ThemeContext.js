import React, { useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
  });
  const [dark, setDark] = useState({
    syntax: '#ddd',
    ui: '#333',
    bg: '#555',
  });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: { isLightTheme, toggleTheme },
        light: {
          ...light,
          setLight,
        },
        dark: { ...dark },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
