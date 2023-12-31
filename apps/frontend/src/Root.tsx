import { App } from "App";
import { ThemeProvider } from "contexts";
import { AlertProvider } from "lib";
import { BrowserRouter } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter basename="correction-demo">
      <ThemeProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
