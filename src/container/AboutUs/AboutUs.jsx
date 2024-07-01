import React from "react";
import "./AboutUs.css";
import Harf from "../../assets/cc.png";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={Harf} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon_img" />
        <p className="p__opensans">
          Restoranımız, yılların verdiği deneyim ve tutkuyla beslenen bir aile
          işletmesidir. Köklerimizde lezzet ve misafirperverlik var; her
          tabağımıza özenle seçtiğimiz taze ve yerel malzemelerle yaşam
          veriyoruz. Her yemeğimizde kaliteyi ve özeni ön planda tutarak,
          misafirlerimize unutulmaz bir deneyim sunuyoruz. Sizleri lezzet dolu
          bir yolculuğa davet ediyoruz.
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="aboutus_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon_img" />
        <p className="p__opensans">
          Biz, etin en saf ve lezzetli halini sunan bir restoranız. Yüksek
          kaliteli yerel etleri özenle seçiyor, ustalıkla pişiriyoruz.
          Misafirlerimize sıcak ve samimi bir ortamda, unutulmaz bir yeme
          deneyimi yaşatmayı hedefliyoruz. Lezzet tutkumuz ve kalite
          anlayışımızla her ziyaretinizi özel kılmak için buradayız.
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
