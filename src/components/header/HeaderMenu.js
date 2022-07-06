import React from "react";
import Button from "../Button";

const HeaderMenu = () => {
  return (
    <menu className="header__menu-conteiner">
      <ul className="header__menu">
        <li className="header__menu-item">Услуги</li>
        <li>Портфолио</li>
        <li>Этапы</li>
        <li>Дизайнеры</li>
      </ul>
      <Button text="Заказать" className="header__menu-btn" />
    </menu>
  );
};

export default HeaderMenu;
