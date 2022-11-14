import React from "react";
import "./aboutDesign.scss";
import DesignItem from "./DesignItem";

const AboutDesign = () => {
  const initialState = [
    {
      title: "Дизайн портала",
      text: `Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.`,
      isOpen: false,
      id: 0,
    },
    {
      title: " Дизайн адаптивной мобильной версии ",
      text: `Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. 
	  При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. 
	  Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML. 
	  Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.`,
      isOpen: false,
      id: 1,
    },
    {
      title: "Дизайн десктопной версии",
      text: `Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.`,
      isOpen: false,
      id: 2,
    },
    {
      title: "Пользовательский интерфейс",
      text: `Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего`,
      isOpen: false,
      id: 3,
    },
    {
      title: "Микро UX",
      text: `Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.`,
      isOpen: false,
      id: 4,
    },
  ];

  return (
    <section className="design" id="design">
      <div className="conteiner">
        <h2 className="design__title title">
          Что входит в услугу по созданию дизайна интернет-магазина?
        </h2>
        <div className="design__content">
          {initialState.map((el) => (
            <DesignItem key={el.id} title={el.title} text={el.text} />
          ))}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutDesign;