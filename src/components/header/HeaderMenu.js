import React, { useState } from "react";
import Button from "../Button";

const HeaderMenu = () => {
  const [menuMobActive, setMenuMobActive] = useState(false);

  return (
    <menu className="header__menu-conteiner">
      <ul
        className={
          !menuMobActive
            ? "header__menu"
            : ["header__menu", "header__menu-active"].join(" ")
        }
      >
        <li className="header__menu-item">Услуги</li>
        <li>Портфолио</li>
        <li>Этапы</li>
        <li>Дизайнеры</li>
      </ul>
      <Button text="Заказать" className="header__menu-btn" />
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
