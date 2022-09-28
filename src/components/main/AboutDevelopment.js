import React, { useRef } from "react";
import "../../styles/aboutDevelopment.scss";
import Cake from "../../images/aboutDevelopers/Сake.png";
import Group176 from "../../images/aboutDevelopers/Group176.png";
import Group177 from "../../images/aboutDevelopers/Group177.png";
import ScanBarcode from "../../images/aboutDevelopers/ScanBarcode.png";
import TopRight from "../../images/aboutDevelopers/TopRight.png";
import BtnSlider from "./BtnSlider";
import { UseSlider } from "../../hooks/UseSlider";

const AboutDevelopment = () => {
  const initialState = [
    {
      src: Group177,
      title: "5. Тестирование",
      text: "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
    },
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
    {
      src: TopRight,
      title: "1. Анализ",
      text: "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение. ",
    },
  ];

  const itemWidthRef = useRef();
  const [transition, positionSlider, handlerPrev, handlerNext] = UseSlider(
    itemWidthRef,
    initialState.length,
    25
  );

  return (
    <section className="development ">
      <div className="conteiner ">
        <div className="development__conteiner">
          <h2 className="title development__title">
            Этапы разработки интернет-магазина
          </h2>
          <div
            className="development__slider "
            style={{
              transform: `translateX(${positionSlider}px)`,
              transition: `${transition}s`,
            }}
          >
            {initialState.map((item, index) => (
              <div className="development__item" key={index} ref={itemWidthRef}>
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
        </div>

        <BtnSlider handlerNext={handlerNext} handlerPrev={handlerPrev} />
      </div>
    </section>
  );
};

export default AboutDevelopment;
