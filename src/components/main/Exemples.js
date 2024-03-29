import React, { useEffect, useRef, useState } from "react";
import "../../styles/exemples.scss";
import baby from "../../images/exemples/baby.png";
import two from "../../images/exemples/two.png";
import close from "../../images/exemples/close.png";
import color from "../../images/exemples/color.png";
import deva from "../../images/exemples/deva.png";
import pexels from "../../images/exemples/pexels.png";
import BtnSlider from "./BtnSlider";
import { UseSlider } from "../../hooks/UseSlider";

const Exemples = () => {
  const initialStateMob = [
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
  ];

  const itemWidthRef = useRef();
  const [screenWidth, setScreenWidth] = useState(0);
  const [positionStartSwipeX, setPositionStartSwipeX] = useState(0);
  const [positionStartSwipeY, setPositionStartSwipeY] = useState(0);

  const [transition, positionSlider, handlerPrev, handlerNext] = UseSlider(
    itemWidthRef,
    14,
    initialStateMob.length / 4
  );
  const startSwipe = (e) => {
    setPositionStartSwipeX(e.changedTouches[0].screenX);
    setPositionStartSwipeY(e.changedTouches[0].screenY);
  };
  const swipeSlider = (e) => {
    const PositionEndSwipeX = e.changedTouches[0].screenX;
    const PositionEndSwipeY = e.changedTouches[0].screenY;

    const resX = positionStartSwipeX - PositionEndSwipeX;
    const resY = positionStartSwipeY - PositionEndSwipeY;

    if (Math.abs(resX) > Math.abs(resY)) {
      if (resX > 75) {
        handlerNext();
      } else if (resX < -75) {
        handlerPrev();
      }
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

  return (
    <section className="exemples" id="exemples">
      <div className="conteiner">
        <h2 className="title">Примеры онлайн-магазинов</h2>
        <div
          className="exemples__conteiner"
          onTouchEnd={swipeSlider}
          onTouchStart={startSwipe}
        >
          <div
            className="exemples__content"
            style={
              screenWidth < 480
                ? {
                    transform: `translateX(${positionSlider}px)`,
                    transition: `${transition}s`,
                  }
                : {}
            }
          >
            {initialStateMob.map((item, index) => (
              <div key={index} className="exemples__item" ref={itemWidthRef}>
                <img src={item.src} alt="baby" />
                <div>
                  <p>{item.title}</p>
                  <span>{item.subTitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {screenWidth < 480 && (
        <BtnSlider handlerNext={handlerNext} handlerPrev={handlerPrev} />
      )}
    </section>
  );
};

export default Exemples;
