import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bize Ulaşın</h1>
        <p className="p__opensans">
          Çankaya Mahallesi, Şehit Uzman Çavuş Erdoğan Sönmez Caddesi No:7/A
          Kepez/Antalya
        </p>
        <p className="p__opensans">+90 540 171 00 07</p>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">
          &quot;Lezzetli bir yolculuğa çıkın ve her lokmada unutulmaz anılar
          biriktirin.&quot;
        </p>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Çalışma Saatlerimiz</h1>
        <p className="p__opensans">Pazartesi-Pazar:</p>
        <p className="p__opensans">10:00 - 22:00</p>
        <p className="p__opensans">Özel Günlerde Kapalıyız.</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">
        ©{" "}
        <a href="https://www.instagram.com/turannmete/" target="_blank">
          Turan Mete Güzel
        </a>{" "}
        2024. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
