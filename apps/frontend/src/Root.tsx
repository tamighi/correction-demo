import { App } from "App";
import { ThemeProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};
