import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./GlobalStyle.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "store";
import { Provider } from "react-redux";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
