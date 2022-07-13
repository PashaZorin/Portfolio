import React from "react";
import "../../styles/exemples.scss";
import two from "../../icons/exemples/two.svg";
import baby from "../../icons/exemples/baby.svg";
import close from "../../icons/exemples/close.svg";
import pexels from "../../icons/exemples/pexels.svg";
import deva from "../../icons/exemples/deva.svg";
import color from "../../icons/exemples/color.svg";
const Exemples = () => {
  const initialState = [
    { src: two, title: "Онлайн-магазин", subTitle: "для оптовых покупок" },
    { src: baby, title: "Онлайн-магазин", subTitle: "для флористов" },
    { src: close, title: "Онлайн-магазин", subTitle: "для парикмахеров" },
    { src: pexels, title: "Онлайн-магазин", subTitle: "для визажистов" },
    { src: deva, title: "Онлайн-магазин", subTitle: "для кондитеров" },
    { src: color, title: "Онлайн-магазин", subTitle: "для художников" },
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
