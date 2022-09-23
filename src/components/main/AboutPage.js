import React, { useEffect, useState } from "react";
import Button from "../Button";
import "../../styles/aboutPage.scss";
import Sphere from "../vectors/Sphere";
import SpherePurple from "../../images/aboutPage/SpherePurple.png";
//import Market from "../../images/aboutPage/Market.png";
import Cart from "../../images/aboutPage/Cart.png";
import Layer from "../../images/repeats/Layer.png";

const AboutPage = () => {
  return (
    <section className="about">
      <div className="conteiner about__conteiner ">
        <div className="about__content">
          <Sphere className="about__content-sphere" />
          <h1 className="about__content-title">
            Разработка интернет-магазина с нуля за неделю
          </h1>
          <p className="about__content-text">
            Дизайн интернет магазина, элементов микро UX, корзин, личного
            кабинета - от фирменного стиля до пользовательского интерфейса в
            сжатые сроки с командой Virtual Designers
          </p>
          <Button text="заказать" />
        </div>
        <div className="about__images">
          <img src={Cart} alt="market" className="about__images-market" />
          {/*<img src={Cart} alt="market" className="about__images-market" />*/}
          <div className="about__images-ellips"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
