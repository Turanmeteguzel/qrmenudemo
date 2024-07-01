import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa/Anasayfa";
import Yiyecek from "./pages/Yiyecek/Yiyecek";
import Icecekler from "./pages/Icecekler/Icecekler";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" Component={Anasayfa} />
      <Route exact path="/yiyecekler" Component={Yiyecek} />
      <Route exact path="/icecekler" Component={Icecekler} />
    </Routes>
  </Router>
);

export default App;
