import React from "react";
import "../Styles/Footer.css";

import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="ul">
        <li>
          <a href="https://github.com/angelcdb">
            <img src={github} alt="imagen" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/angel-contreras-front-end-developer-748094218/">
            <img src={linkedin}  alt="imagen" />
          </a>
        </li>
      </ul>

      <p className="pp">Copyright | Angel Contreras © 2022</p>
    </footer>
  );
};

export { Footer };
