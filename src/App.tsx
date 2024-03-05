import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle.jsx";

import Home from "pages/Home";
import { theme, lightTheme, darkTheme } from "theme/index.ts";

const lightThemeMode = { ...theme, ...lightTheme };
const darkThemeMode = { ...theme, ...darkTheme };

export default function App() {
  const [themeMode, setThemeMode] = useState(lightThemeMode);
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => setToggle(!toggle);

  useEffect(() => {
    setThemeMode(toggle ? darkThemeMode : lightThemeMode);
  }, [toggle]);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Toggle theme</button>
      <Home />
    </ThemeProvider>
  );
}
