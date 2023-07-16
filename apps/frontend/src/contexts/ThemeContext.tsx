import React from "react";

import { createTheme, ThemeProvider } from "lib";

const ToggleThemeContext = React.createContext<(() => void) | null>(null);

export const useToggleTheme = () => {
  return React.useContext(ToggleThemeContext);
};

const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = React.useState<"dark" | "light">(
    localStorage.getItem("dark") === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    localStorage.setItem("dark", mode === "dark" ? "light" : "dark");

    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const theme = createTheme({
    palette: {
      mode,
      colors: {
        ...(mode === "light"
          ? {
              primary: "rgba(248, 195, 115, 0.8)",
              secondary: "rgba(165, 30, 30, 0.8)",
              surface: "rgba(229, 103, 20, 0.8)",
              text: "black",
            }
          : {
              primary: "rgba(60, 80, 200, 0.8)",
              secondary: "rgba(153, 30, 170, 0.8)",
              surface: "rgba(0, 0, 96, 0.8)",
              text: "white",
            }),
      },
    },
    transition: "color 0.6s, background 0.6s",
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};
export default MyThemeProvider;
