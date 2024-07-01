import React from "react";
import "./Header.css";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1 text-center">QR Menu</h1>
      <p className="p__opensans text-center" style={{ margin: "2rem 0" }}>
        Lezzet dolu anılar biriktirmek için doğru yerdesiniz, her lokmada
        mutluluğu hissedin.{" "}
      </p>
      <div className="buttonList items-center text-center p-2">
        <button type="button" className="custom__button m-2">
          Et Menumuzu Gör
        </button>{" "}
        <button type="button" className="custom__button m-2">
          Ara Sıcaklar Menumuzu Gör
        </button>{" "}
        <button type="button" className="custom__button m-2">
          İçecekler Menumuzu Gör
        </button>{" "}
        <button type="button" className="custom__button m-2">
          Tatlılar Menumuzu Gör
        </button>{" "}
      </div>
    </div>
  </div>
);

export default Header;
