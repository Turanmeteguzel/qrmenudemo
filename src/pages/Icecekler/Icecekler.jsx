import { React } from "react";
import { MenuItem, Navbar } from "../../components";
import { data } from "../../constants";
import "./Icecekler.css";
import Footer from "../../container/Footer/Footer";

const Icecekler = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          className="app__specialMenu flex__center section__padding"
          id="menu"
        >
          <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine  flex__center">
              <p className="app__specialMenu-menu_heading">İçecekler</p>
              <div className="app__specialMenu_menu_items">
                {data.icecekler.map((icecekler, index) => (
                  <MenuItem
                    key={icecekler.title + index}
                    title={icecekler.title}
                    price={icecekler.price}
                    tags={icecekler.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Icecekler;
