import React from "react";
import logo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Byte Quiz</h1>
    </header>
  );
};

export default Header;
