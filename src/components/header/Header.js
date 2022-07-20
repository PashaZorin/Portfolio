import React from "react";
import Logo from "../vectors/Logo";
import HeaderMenu from "./HeaderMenu";
import "../../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__conteiner conteiner">
        <Logo className="header__logo" />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
