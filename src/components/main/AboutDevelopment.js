import React, { useState } from "react";
import "../../styles/aboutDeveloper.scss";
import Cake from "../../images/aboutDevelopers/Сake.png";
import Group176 from "../../images/aboutDevelopers/Group176.png";
import Group177 from "../../images/aboutDevelopers/Group177.png";
import ScanBarcode from "../../images/aboutDevelopers/ScanBarcode.png";
import TopRight from "../../images/aboutDevelopers/TopRight.png";
import Arrow from "../vectors/Arrow";

const AboutDevelopment = () => {
  const initialState = [
    {
      src: TopRight,
      title: "1. Анализ",
      text: "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ",
    },
    {
      src: Cake,
      title: "2. Визуальное решение",
      text: "Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт.",
    },
    {
      src: ScanBarcode,
      title: "3. Техническая реализация",
      text: "После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.",
    },
    {
      src: Group176,
      title: "4. Наполнение контентом ",
      text: "Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.  ",
    },
    {
      src: Group177,
      title: "5. Тестирование",
      text: "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
    },
  ];
  const [sliderPosition, setSliderPosition] = useState(0);

  const handlerPrev = () => {
    if (sliderPosition < 0) {
      setSliderPosition((prev) => (prev += 700));
    }
  };
  const handlerNext = () => {
    if (sliderPosition > -2100) {
      setSliderPosition((prev) => (prev -= 700));
    }
  };
  return (
    <section className="development ">
      <h2 className="development__title title">
        Этапы разработки интернет-магазина
      </h2>
      <div className="conteiner">
        <div
          className="development__slider "
          style={{ transform: `translateX(${sliderPosition}px` }}
        >
          {initialState.map((item, index) => (
            <div className="development__item" key={index}>
              <div className="development__item-content">
                <h3 className="development__item-title">{item.title}</h3>
                <p className="development__item-text">{item.text}</p>
              </div>
              <div className="development__item-images">
                <img src={item.src} alt={item.src} />
              </div>
            </div>
          ))}
        </div>
        <div className="development__btns-conteiner">
          <button onClick={handlerPrev} className="development__button-prev">
            <Arrow />
          </button>
          <button onClick={handlerNext} className="development__button-next">
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutDevelopment;
