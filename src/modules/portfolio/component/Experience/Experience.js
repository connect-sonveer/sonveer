import React from 'react'

const Experience = () => {
    return (
        <section className="experience py-5" id="experience">
            <div className="container py-3">
                <p className="paragraph">work experience</p>
                <h3 className="heading mb-sm-5 mb-4">My Experience</h3>
                <div className="middile-inner-con">
                    <div className="tab-main mx-auto">

                        <input id="tab1" type="radio" name="tabs" defaultChecked></input>
                        <label htmlFor="tab1"><img src={require("../../../../assets/portfolio/images/s1.png")} alt="" className="img-fluid" /> Icreon Communications</label>

                        <input id="tab2" type="radio" name="tabs"></input>
                        <label htmlFor="tab2"><img src={require("../../../../assets/portfolio/images/s2.png")} alt="" className="img-fluid" /> nKAPs Intellects</label>

                        <input id="tab3" type="radio" name="tabs"></input>
                        <label htmlFor="tab3"><img src={require("../../../../assets/portfolio/images/s4.png")} alt="" className="img-fluid" /> Shivlania Enterprises</label>

                        <section id="content1">
                            <div className="menu-grids">
                                <div className="t-in">
                                    <div className="text-info-sec">
                                        <div className="service-in text-left">
                                            <div className="card-box" >
                                                <div className="card-body p-0">
                                                    <h3 className="mb-md-4">Software Engineer</h3>
                                                    <h5 className="my-3 card-title" data-aos="fade-left">2015 to Present</h5>
                                    <p className="card-text" data-aos="fade-left">
                                        After working for 10 months in <strong>nKAPs</strong> and learning some advance concepts I switched to a larger and well established company i.e. 
                                        Icreon as it(nKAPs) was shut down by its owners due to reasons I don't know 😅.
                                    </p>
                                    <br></br>
                                    <p>
                                        In Icreon, I started my journey in Oct 2015 as Associate Software Engineer. During my working period till now, 
                                        I got the chance to work on many big and different types of projects like 
                                        <a className="prjlst" href="http://netveille.com/tools.php#toolsPriceveille" target="_blank"><strong> Priceveille</strong></a>, <strong>Shopkart</strong> 
                                        and <a className="prjlst" href="https://sitecompli.com/" target="_blank"><strong>SiteCompli</strong></a>.
                                    </p>
                                    <br></br>
                                    <p>
                                        For the successful development of the above-mentioned projects I had to learn many such technologies 
                                        which were new to me and implement them quickly, some of them include <strong>Perl</strong>, <strong>Python</strong>,
                                        <strong>GIT</strong>, <strong>handlebars</strong>, <strong>React</strong>, <strong>AWS</strong>, <strong>CakePHP</strong>
                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="content2">
                            <div className="menu-grids">
                                <div className="t-in">
                                    <div className="text-info-sec">
                                        <div className="service-in text-left">
                                            <div className="card-box" >
                                                <div className="card-body p-0">
                                                    <h3 className="mb-md-4">Software Developer</h3>
                                                    <h5 className="my-3 card-title" data-aos="fade-left">2014 - 2015</h5>
                                    <p className="card-text" data-aos="fade-left">
                                        After working for 10 months in <strong>Shivlania Enterprises</strong> and learning some basic concepts of web development 
                                        I switched to a slightly bigger company i.e. <strong>nKAPs</strong> to gain more deep knowledge about the advance concepts of web development.
                                    </p>
                                    <br></br>
                                    <p>
                                        I joined nKAPs in Nov 2014 as a Software Developer after successfully clearing many tough rounds 
                                        and waiting for about a month to get a final call. While working with nKAPs, 
                                        I got a chance to work at client location for 6 months.
                                    </p>
                                    <br></br>
                                    <p>
                                        After successfully working at client's location for the project <a className="prjlst" href="http://www.hello42cab.com/" target="_blank">
                                        <strong>Hello42 Cabs</strong></a>, i have also worked on other projects like <strong>Freedom Delivers</strong> and 
                                        <strong>Precise Air Proposal System</strong> and learn &AMP; implemented new technologies like <strong>jQuery</strong>,
                                        <strong>PHP</strong>, <strong>MySQL</strong>, <strong>SVN</strong>, <strong>CodeIgniter</strong>.
                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="content3">
                            <div className="menu-grids">
                                <div className="t-in">
                                    <div className="text-info-sec">
                                        <div className="service-in text-left">
                                            <div className="card-box" >
                                                <div className="card-body p-0">
                                                    <h3 className="mb-md-4">Trainee</h3>
                                                    <h5 className="my-3 card-title" data-aos="fade-left">2014</h5>
                                    <p className="card-text" data-aos="fade-left">
                                        <strong>Shivlania Enterprises</strong> was my first company, I joined Shivlania in May 2014 as a Trainee Developer after
                                        clearing my first interview process in one go. As before joining Shivlania, I have already gathered some knowledge 
                                        by developing a project(<strong>e-recruitment</strong>) in graduation final year with my friends.
                                    </p>
                                    <br></br>
                                    <p>
                                        At Shivlania, I had learned many technologies like HTML, CSS, PHP, MySQL by implementing them in projects like 
                                        <strong>DailyNews</strong>, <a className="prjlst" href="http://dravyasoft.com/" target="_blank"><strong>Dravya Soft</strong></a>
                                        and started my Carrer.
                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
