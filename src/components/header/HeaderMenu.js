import React, { useState } from "react";
import Button from "../Button";
import { Link } from "react-scroll";
const HeaderMenu = () => {
  const [menuMobActive, setMenuMobActive] = useState(false);
  const initialState = [
    { text: "Услуги", componentsId: "design" },
    //{ text: "Портфолио", componentsId: "" },
    { text: "Этапы", componentsId: "development" },
    { text: "Дизайнеры", componentsId: "exemples" },
  ];
  return (
    <menu className="header__menu-conteiner">
      <ul
        className={
          !menuMobActive
            ? "header__menu"
            : ["header__menu", "header__menu-active"].join(" ")
        }
      >
        {initialState.map((item, index) => {
          return (
            <li key={index} className="header__menu-item">
              <Link
                activeClass="active"
                to={item.componentsId}
                spy={true}
                smooth={true}
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

export default HeaderMenu;
