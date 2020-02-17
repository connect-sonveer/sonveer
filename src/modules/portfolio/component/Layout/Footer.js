import React from 'react'

const Footer = () => {
        return (
            <React.Fragment>
                <footer className="py-lg-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <h3 className="wthree-logo mt-3">
                                    <a href="index.html" id="logoLink"><img src="images/logo.png" alt="" className="img-fluid" style={{height: 50}}/>
                                                    <span>S</span>onveer <span>S</span>ingh</a>
                                </h3>
                            </div>
                            <div className="col-lg-5 my-lg-0 my-4">
                                <p><span className="fa mr-2 fa-map-marker"></span> F-317, Noida, Uttar Pradesh, India</p>
                                <p className="mt-2"><span className="fa mr-2 fa-envelope"></span>
                                                    <a href="mailto:info@example.com">connect.sonveer@gmail.com</a>, 
                                                    <span className="fa ml-3 mr-2 fa-phone"></span>9555-887-188</p>
                            </div>
                            <div className="col-lg-3 copy-right p-0 text-lg-right">
                            
                                <p>Follow me on social media</p>
                                <ul className="social_section_1info">
                                    <li className="mb-2 facebook"><a href="https://www.facebook.com/connect.sonveer" rel="noopener noreferrer" target="_blank"><span className="fa fa-facebook"></span></a></li>
                                    <li className="mb-2 twitter"><a href="https://twitter.com/sonveer_singh12" rel="noopener noreferrer" target="_blank"><span className="fa fa-twitter"></span></a></li>
                                    <li className="linkedin"><a href="https://www.linkedin.com/in/connect-sonveer/" rel="noopener noreferrer" target="_blank"><span className="fa fa-linkedin"></span></a></li>
                                    <li className="pinterest"><a href="http://www.pinterest.com" rel="noopener noreferrer" target="_blank"><span className="fa fa-pinterest"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="move-top text-right">
                    <a href="#home" id="move-top" className="move-top"> 
                        <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span>
                    </a>
                </div>
            </React.Fragment>
        )
}

export default Footer
