import React from "react";
import "../../styles/footer.scss";
import Logo from "../vectors/Logo";
import viber from "../../icons/viber.svg";
import facebook from "../../icons/facebook.svg";
import telegram from "../../icons/telegram.svg";
import whatsApp from "../../icons/whatsapp.svg";
import instagram from "../../icons/instagram.svg";

const Footer = () => {
  const initialStateMessengers = [
    { src: instagram, url: "https://www.instagram.com/" },
    { src: facebook, url: "https://uk-ua.facebook.com/" },
    { src: telegram, url: "https://web.telegram.org/z/" },
    { src: viber, url: "https://account.viber.com/ru/login" },
    { src: whatsApp, url: "https://web.whatsapp.com/" },
  ];
  const initialStateContacts = [
    "Валерия : +380505859409",
    "Анна: +380505859409",
    "Валерия: +380505859409",
  ];

  return (
    <footer className="footer">
      <div className="conteiner">
        <div className="footer__conteiner">
          <div className="footer__information-main">
            <Logo className="footer__logo" />
            <ul className="footer__contacts">
              {initialStateContacts.map((item, index) => {
                return (
                  <li className="footer__contacts-item" key={index}>
                    <img src={viber} alt="https://account.viber.com/ru/login" />
                    <a href="https://account.viber.com/ru/login" target="blank">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="footer__messengers">
              {initialStateMessengers.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url} target="blank">
                      <img src={item.src} alt={item.url} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer__information-additional">
            <a
              href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser"
              target="blank"
            >
              hr@dv-s.com
            </a>
          </div>
        </div>
      </div>

      <p className="footer__copyright ">
        Developers 2018-2022 &copy; All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
