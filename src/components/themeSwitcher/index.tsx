import React from 'react';
import useChangeMode from 'utils/hooks/useChangeMode';

const sun = require('assets/images/sun.png');
const moon = require('assets/images/moon.png');

const ThemeSwitcher: React.FC = (props) => {
  const [isDarkMode, onModeChange] = useChangeMode();

  return (
    <div
      className={`w-16 h-16 rounded-full flex justify-center vertical-align
       p-1 cursor-pointer bg-amber-500 dark:bg-amber-600`}
      onClick={() => onModeChange(isDarkMode ? 'light' : 'dark')}
    >
      {isDarkMode ? (
        <img
          src={sun}
          alt="sun theme mode"
        />
      ) : (
        <img
          src={moon}
          alt="moon theme mode"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
