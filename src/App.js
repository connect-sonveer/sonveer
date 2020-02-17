import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    if(window.location.pathname == "/"){
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
    } else {
      return(
        <React.Fragment>
          <Router>
            <Route path="/blog" exact component={Skills} />
          </Router>
        </React.Fragment>
      )
    }
    
  }
}

export default Application;
