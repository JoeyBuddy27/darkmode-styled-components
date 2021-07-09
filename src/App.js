import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";

const titleColor = "#dc658b";

const LightTheme = {
  pageBackground: "white",
  titleColor: titleColor,
  tagColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "green",
  tagColor: "lavender",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <SplashScreen theme={currentTheme} setTheme={setCurrentTheme} />
    </ThemeProvider>
  );
}

export default App;
