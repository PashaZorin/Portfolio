import React from "react";
import "../../styles/exemples.scss";
import baby from "../../images/exemples/baby.png";
import two from "../../images/exemples/two.png";
import close from "../../images/exemples/close.png";
import color from "../../images/exemples/color.png";
import deva from "../../images/exemples/deva.png";
import pexels from "../../images/exemples/pexels.png";

const Exemples = () => {
  const initialState = [
    {
      src: two,
      title: "Онлайн-магазин",
      subTitle: "для оптовых покупок",
    },
    {
      src: baby,
      title: "Онлайн-магазин",
      subTitle: "для флористов",
    },
    {
      src: close,
      title: "Онлайн-магазин",
      subTitle: "для парикмахеров",
    },
    {
      src: pexels,
      title: "Онлайн-магазин",
      subTitle: "для парикмахеров",
    },
    {
      src: deva,
      title: "Онлайн-магазин",
      subTitle: "для кондитеров",
    },
    {
      src: color,
      title: "Онлайн-магазин",
      subTitle: "для художников",
    },
  ];
  return (
    <section className="exemples">
      <div className="conteiner">
        <h2 className="title">Примеры онлайн-магазинов</h2>
        <div className="exemples__content">
          {initialState.map((item, index) => (
            <div key={index} className="exemples__item">
              <img src={item.src} alt="baby" />
              <div>
                <p>{item.title}</p>
                <span>{item.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exemples;
