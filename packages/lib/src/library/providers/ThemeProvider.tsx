import React from "react";

import { lightTheme } from "../constants";
import { Theme } from "../types";

const ThemeContext = React.createContext<Theme | null>(null);

export const useTheme = () => {
  return React.useContext(ThemeContext) || lightTheme;
};

const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
