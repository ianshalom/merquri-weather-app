import { useEffect, useState, createContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.jsx";
import Home from "pages/Home";
import { theme, lightTheme, darkTheme } from "theme/index.ts";

export const ThemeContext = createContext<null | boolean>(null);

const lightThemeMode = { ...theme, ...lightTheme };
const darkThemeMode = { ...theme, ...darkTheme };

export default function App() {
  const [themeMode, setThemeMode] = useState(lightThemeMode);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  useEffect(() => {
    setThemeMode(isDarkTheme ? darkThemeMode : lightThemeMode);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Home onClick={toggleTheme} isDarkMode={isDarkTheme} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
