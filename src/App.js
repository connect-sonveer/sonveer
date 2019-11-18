import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class Application extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Education />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Application;
