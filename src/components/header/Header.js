import React, { useCallback, useEffect, useState } from "react";
import Logo from "../vectors/Logo";
import HeaderMenu from "./HeaderMenu";
import "../../styles/header.scss";

const Header = () => {
  const [headerFixed, setHeaderFixed] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    if (window.pageYOffset > 95) {
      if (scrollPosition < window.pageYOffset) {
        setScrollPosition(window.pageYOffset);
        setHeaderFixed(false);
      }
      if (scrollPosition > window.pageYOffset) {
        setHeaderFixed(true);
        setScrollPosition(window.pageYOffset);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.pageYOffset]);
  return (
    <header className={headerFixed ? "header show" : "header "}>
      <div className="header__conteiner conteiner">
        <Logo className="header__logo" />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;
