import React from "react";
import Button from "../Button";
import "../../styles/aboutPage.scss";
import Sphere from "../vectors/Sphere";
import Market from "../vectors/Market";

const AboutPage = () => {
  return (
    <section className="about">
      <div className="conteiner about__conteiner ">
        <div className="about__content">
          <Sphere className="about__content-sphere" />
          <img
            src="../../images/aboutSection/layer.png"
            alt="layer"
            className="about__content-vawe"
          />
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
          {/*<Market />*/}
          <img src="../../images/aboutSection/market.png" alt="market" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
