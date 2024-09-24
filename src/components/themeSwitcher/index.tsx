import React from 'react';
import useChangeMode from 'utils/hooks/useChangeMode';

const sun = require('assets/images/sun.png');
const moon = require('assets/images/moon.png');

const ThemeSwitcher: React.FC = (props) => {
  const [isDarkMode, onModeChange] = useChangeMode();

  return (
    <div
      className="w-16 h-16 rounded-full"
      onClick={() => onModeChange(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? (
        <img
          src={moon}
          alt="moon theme mode"
        />
      ) : (
        <img
          src={sun}
          alt="sun theme mode"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
