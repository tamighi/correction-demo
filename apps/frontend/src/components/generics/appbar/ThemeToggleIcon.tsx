import { IconButton, MoonIcon, SunIcon, useTheme } from "lib";

import { useToggleTheme } from "contexts";

const ThemeToggleIcon = () => {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <IconButton onClick={toggleTheme || undefined}>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default ThemeToggleIcon;
