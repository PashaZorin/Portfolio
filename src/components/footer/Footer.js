import React from "react";
import "../../styles/footer.scss";
import Logo from "../vectors/Logo";
import viber from "../../icons/viber.svg";
import facebook from "../../icons/facebook.svg";
import telegram from "../../icons/telegram.svg";
import whatsapp from "../../icons/whatsapp.svg";
import instagram from "../../icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__conteiner conteiner">
        <div className="footer__information-main">
          <Logo className="footer__logo" />
          <div className="footer__contacts">
            <div className="footer__contacts-item">
              <img src={viber} alt="viber" />
              <p>Валерия : +380505859409</p>
            </div>
            <div className="footer__contacts-item">
              <img src={viber} alt="viber" />
              <p>Анна: +380505859409</p>
            </div>
            <div className="footer__contacts-item">
              <img src={viber} alt="viber" />
              <p>Валерия: +380505859409</p>
            </div>
          </div>
          <div className="footer__messengers">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={telegram} alt="telegram" />
            <img src={viber} alt="viber" />
            <img src={whatsapp} alt="whatsapp" />
          </div>
        </div>
        <div className="footer__information-additional">
          <p>hr@dv-s.com</p>
        </div>
      </div>
      <p className="footer__copyright ">
        Developers 2018-2022 &copy; All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
