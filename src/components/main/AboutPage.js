import React from "react";
import Button from "../Button";
import "../../styles/aboutPage.scss";
import Sphere from "../vectors/Sphere";
import market from "../../icons/market.svg";
import imagWave from "../../icons/imgWave.svg";
import pinkСircle from "../../icons/pinkСircle.svg";

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
          <img src={market} alt="market" className="about__images-market" />
          <img className="about__images-wave" src={imagWave} alt="imagesWave" />
          <div className="about__images-ellips">
            <Sphere className="about__images-sphere" />
            <img
              className="about__images-pink"
              src={pinkСircle}
              alt="pinkСircle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
