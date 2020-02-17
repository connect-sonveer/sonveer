import React from 'react'

const Home = () =>{
        return (
            <div id="home" className="banner-w3pvt d-flex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 bnr-txt-w3pvt">
                            <div className="bnr-w3pvt-txt mt-sm-5">
                                <h6>Welcome to my Personal Website</h6>
                                <h2>Hello <span>I'm Sonveer Singh</span></h2>
                                <h4>web developer - freelancer - blogger - fitness enthusiast</h4>
                                <p className="mt-4"> 
                                    Prolific and Energetic Software Developer plus a freelancer with a total industry
                                    experience of 4.75 years and a relevent experience of 3 years in developing, 
                                    testing, and maintaining enterprise software applications.
                                </p>
                                <ul className="social_section_1info mt-4">
                                    <li className="mb-2 facebook"><a href="#"><span className="fa fa-facebook"></span></a></li>
                                    <li className="mb-2 twitter"><a href="#"><span className="fa fa-twitter"></span></a></li>
                                    <li className="linkedin"><a href="#"><span className="fa fa-linkedin"></span></a></li>
                                    <li className="pinterest"><a href="#"><span className="fa fa-pinterest"></span></a></li>
                                </ul>
                                <a href="#about" className="scroll bnr-btn mr-2">Read more </a>
                                <a href="#contact" className="scroll bnr-btn1">Contact Me </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Home
