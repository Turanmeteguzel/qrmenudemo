import { React } from "react";
import { MenuItem, Navbar } from "../../components";
import { data } from "../../constants";
import "./Yiyecek.css";

const Yiyecek = () => {
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
              <p className="app__specialMenu-menu_heading">Etler</p>
              <div className="app__specialMenu_menu_items">
                {data.wines.map((wine, index) => (
                  <MenuItem
                    key={wine.title + index}
                    title={wine.title}
                    price={wine.price}
                    tags={wine.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yiyecek;
