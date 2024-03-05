import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./GlobalStyle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "store";
import { Provider } from "react-redux";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";

import { theme, lightTheme, darkTheme } from "theme/index.ts";

const queryClient = new QueryClient();

const themeObject = { ...theme, ...lightTheme };

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={themeObject}>
          <GlobalStyle />
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
