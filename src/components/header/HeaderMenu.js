import React, { useEffect, useState, memo } from "react";
import Button from "../Button";
import { Link } from "react-scroll";
import Arrow from "../vectors/Arrow";
const HeaderMenu = (scrollPosition) => {
  const [menuMobActive, setMenuMobActive] = useState(false);
  const [portfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const initialState = [
    //{ text: "Портфолио", componentsId: "" },
    { text: "Услуги", componentsId: "design" },
    { text: "Этапы", componentsId: "development" },
    { text: "Дизайнеры", componentsId: "exemples" },
  ];
  const portfolio = [
    { url: "https://shopping-ochre.vercel.app/", text: "shoping" },
    { url: "https://pashazorin.github.io/tic-tac-toe/", text: "tic-tac-toe" },
    { url: "https://abz-agency-eight.vercel.app/", text: "testtask" },
  ];
  useEffect(() => {
    if (window.innerWidth < 678) {
      menuMobActive
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }
  }, [menuMobActive]);
  useEffect(() => {
    if (portfolioIsOpen) {
      window.dispatchEvent(new Event("click"));
      setPortfolioIsOpen((prev) => !prev);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  const closeList = () => {
    setPortfolioIsOpen((prev) => !prev);
    return window.removeEventListener("click", closeList);
  };
  const openPortfolioList = () => {
    if (!portfolioIsOpen) {
      setTimeout(() => {
        window.addEventListener("click", closeList);
      }, 100);
    } else {
      setPortfolioIsOpen((prev) => !prev);
    }
    setPortfolioIsOpen((prev) => !prev);
  };

  return (
    <menu className="header__menu-conteiner">
      <ul
        className={
          !menuMobActive
            ? "header__menu"
            : ["header__menu", "header__menu-active"].join(" ")
        }
      >
        <div className="header__portfolio-conteiner">
          <div className="header__portfolio" onClick={openPortfolioList}>
            <span>Портфолио</span>
            <Arrow
              className={`header__portfolio-errow  ${
                portfolioIsOpen ? "open" : ""
              }`}
            />
          </div>
          <ul
            className={`header__portfolio-list ${
              portfolioIsOpen ? "show" : ""
            }`}
          >
            {portfolio.map((item, index) => {
              return (
                <li className="header__portfolio-item" key={index}>
                  <a href={item.url} target="blank">
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {initialState.map((item, index) => {
          return (
            <li key={index} className="header__menu-item">
              <Link
                activeClass="active"
                to={item.componentsId}
                spy={true}
                smooth={true}
                onClick={() => setMenuMobActive((prev) => !prev)}
              >
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button text="Заказать" className="header__menu-btn" url="discuss" />
      <div
        className={
          !menuMobActive
            ? "header__dots"
            : ["header__dots", "header__dots-active"].join(" ")
        }
        onClick={() => setMenuMobActive((prev) => !prev)}
      >
        <span />
      </div>
    </menu>
  );
};

export default memo(HeaderMenu);
