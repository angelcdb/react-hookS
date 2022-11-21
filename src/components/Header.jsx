import React,{ useContext} from "react";
import { ThemeContext } from "../context/ThemeContext";


const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="Header">
      <h1 className="hh">Rick & Morty</h1>
      <div>
        <button
          className="button"
          type="button"
          onClick={handleClick}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      <h2 className="fav">Favorites:</h2>

      {/* Otra forma: */}
      {/* <button type="button" onClick={() => setDarMode(!darkMode)}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button> */}
    </div>
  );
};

export { Header };
