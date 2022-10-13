import React, { Fragment } from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Nav />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </Fragment>
  );
};

export default App;
