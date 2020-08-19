import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Booklist = () => {
  const { isLightTheme, light, dark } = React.useContext(ThemeContext);
  const theme = isLightTheme.isLightTheme ? light : dark;

  return (
    <div
      className='book-list'
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li>
      </ul>
    </div>
  );
};

export default Booklist;
