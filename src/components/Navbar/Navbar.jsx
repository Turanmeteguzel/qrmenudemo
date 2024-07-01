import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Logo from "../../assets/cankaya.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Logo} alt="app logo" />
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <Link to="/yiyecekler">
                <li className="p__opensans">
                  <a href="#home">Etler</a>
                </li>
              </Link>
              <li className="p__opensans">
                <a href="#about">Ara Sıcaklar</a>
              </li>
              <Link to="/icecekler">
                <li className="p__opensans">
                  <a href="#menu">İçecekler</a>
                </li>
              </Link>
              <li className="p__opensans">
                <a href="#awards">Tatlılar</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
