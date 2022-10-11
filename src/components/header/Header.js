import React, { useEffect, useState } from "react";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.pageYOffset]);
  return (
    <header
      className={headerFixed ? "header show" : "header "}
      style={scrollPosition > 130 ? { padding: 8 } : { padding: 18 }}
    >
      <div
        className={`header__conteiner ${
          window.innerWidth > 1120 ? "conteiner" : ""
        } `}
      >
        <Logo
          className="header__logo"
          style={scrollPosition > 130 ? { height: 30 } : { height: 59 }}
        />
        <HeaderMenu scrollPosition={scrollPosition} />
      </div>
    </header>
  );
};

export default Header;
