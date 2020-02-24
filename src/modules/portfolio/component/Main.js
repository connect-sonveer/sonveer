import React, { Component } from 'react';
import Header from "../../portfolio/component/Layout/Header";
import Home from "../../portfolio/component/Home/Home";
import About from "../../portfolio/component/About/About";
import Skills from "../../portfolio/component/Skills/Skills";
import Experience from "../../portfolio/component/Experience/Experience";
import Portfolio from "../../portfolio/component/Portfolio/Portfolio";
import Education from "../../portfolio/component/Education/Education";
import Contact from "../../portfolio/component/Contact/Contact";
import Footer from "../../portfolio/component/Layout/Footer";

export class Main extends Component {
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
        )
    }
}

export default Main
