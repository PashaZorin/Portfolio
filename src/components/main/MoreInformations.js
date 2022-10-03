import React from "react";
import "../../styles/MoreInformations.scss";
import Order from "../../images/moreInformations/Orders.png";
import OrdersMobile from "../../images/moreInformations/OrdersMobile.png";
import Button from "../Button";
import Sphere from "../vectors/Sphere";

const MoreInformations = () => {
  return (
    <section className="informations">
      <Sphere className="informations__sphere" />
      <h2 className="title informations__title-mobile  ">
        Необходимо больше информации?
      </h2>
      <div className="informations__conteiner conteiner ">
        <div className="informations__content">
          <h2 className="title  ">Необходимо больше информации?</h2>
          <p>
            Если Вы владелец онлайн-магазина или только начинаете свой путь в
            электронной коммерции и вам нужен уникальный дизайн онлайн магазина
            для стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и
            короткий период времени, он поможет визуализировать ваш веб проект.
          </p>
          <Button text="Оставить заявку" />
        </div>
        <div className="informations__images">
          <img
            className="informations__images-desktop"
            src={Order}
            alt="Order"
          />
          <img
            className="informations__images-mobile"
            src={OrdersMobile}
            alt="OrdersMobile"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreInformations;
