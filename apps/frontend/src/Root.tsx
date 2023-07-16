import { App } from "App";
import { QueryClientProvider, ThemeProvider } from "contexts";
import { BrowserRouter } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <QueryClientProvider>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
