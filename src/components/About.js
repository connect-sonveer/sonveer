import React from 'react'

const About = () => {
        return (
            <section className="about pt-5" id="about">
                <div className="container-fluid">
                    <div className="row _yhgttr">
                        <div className="col-lg-5 p-0 abt-pic img-fluid">
                                        <img src="images/about.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-right">
                                <h4 className="main">Born To Be Creative</h4>
                                <p>
                                    I am a <strong>software developer</strong> and a<strong> freelancer</strong> with a total industry experience of around
                                    <strong>4.75 Yrs.</strong>
                                </p>
                                
                                <p>I have a keen interest in learning &amp; implementing new technologies 
                                    and <strong>writing blogs</strong>.<br></br>
                                    Apart from the technical background, my interests drive me towards <strong>fitness, 
                                    sports, and social work.</strong>
                                </p>
                                <br></br>
                                <p>
                                    If I talk about my life, I am a person with a very positive and straight forward outlook towards the world, 
                                    being a fitness enthusiast and social worker I practice to live my life happily 
                                    by spreading happiness and positivity.
                                </p>
                                <div className="row mt-sm-5 mt-4 about-right-inner">
                                    <div className="col-sm-4 col-6 myphoto-sign text-center">
                                            <img src="images/myphoto.png" alt="" className="img-fluid rounded-circle"/>
                                            <img src="images/signature.png" alt="" className="img-fluid mt-3"/>
                                            <a href="uploads/resume.pdf" target="_blank" className="scroll abt-btn">Download Resume </a>
                                    </div>
                                    <div className="col-sm-7 offset-lg-1">
                                        <div className="about-con">
                                            <ul>
                                                <li><strong>Name:</strong> Sonveer Singh</li>
                                                <li><strong>Email:</strong> <a href="mailto:connect.sonveer@gmail.com">connect.ronit@gmail.com</a></li>
                                                <li><strong>Phone:</strong> (+91) - 9555-887-188</li>
                                                <li><strong>Date of birth:</strong> 12 August 1992</li>
                                                <li><strong>Address:</strong> F-317, Noida, Uttar Pradesh, India</li>
                                                <li><strong>Nationality:</strong> India</li>
                                            </ul>		    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="position">About Me</h3>
                    </div>
                </div>
            </section>
        )
}

export default About
