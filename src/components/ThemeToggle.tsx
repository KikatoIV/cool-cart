

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { lightTheme } from "src/themes";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === lightTheme ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;
