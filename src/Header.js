import React from "react";
import { FaTabletAlt, FaDesktop, FaMobileAlt } from "react-icons/fa";

const Header = ({ title, width }) => {
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 512 ? (
        <FaMobileAlt />
      ) : width < 768 ? (
        <FaTabletAlt />
      ) : (
        <FaDesktop />
      )}
    </header>
  );
};

export default Header;
