import React from 'react'

const Header = () =>{
        return (
                <header>
                    <nav className="navbar">
                        <div className="container">
                            <h1 className="wthree-logo">
                                <a href="index.html" id="logoLink"><img src="images/logo.png" alt="" className="img-fluid" style={{height: 50}}/>
                                <span>S</span>onveer <span>S</span>ingh</a>
                            </h1>

                            <ul id="menu">
                                <li>
                                    <input id="check02" type="checkbox" name="menu" />
                                    <label htmlFor="check02"><span className="fa fa-bars" aria-hidden="true"></span></label>
                                    <ul className="submenu">
                                        <li><a href="index.html" className="active">Home</a></li>
                                        <li><a href="#about">About Me</a></li>
                                        <li><a href="#skills">Skills</a></li>
                                        <li><a href="#experience">Experience</a></li>
                                        <li><a href="#portfolio">Portfolio</a></li>
                                        <li><a href="#education">Education</a></li>
                                        <li><a href="#contact">Contact Me</a></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </header>
        )
}

export default Header
