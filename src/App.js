import React, { useState } from "react";
import { Header } from "./components/Header";
import { Characters } from "./components/Characters";
import { ThemeContext } from "./context/ThemeContext";

import {Contador} from './components/Contador';
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "Dark" : "Light"}>
        <Contador />

        <Header />
        <Characters />
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
