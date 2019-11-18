import React from 'react'

const Portfolio = () => {
    return (
        <section className="portfolio py-5" id="portfolio">
            <div className="container py-lg-5">
                <p className="paragraph">My recent Work</p>
                <h3 className="heading mb-sm-5 mb-4">Portfolio</h3>
                <div className="row">
                                <div id="myModal" className="modal">
                                    
                                    <span className="close">&times;</span>
                                    <img alt="" className="modal-content" id="img01"/>
                                    <div id="caption"></div>
                                </div>
                    <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img className="myImg img-fluid" src="images/portfolio1.jpg" alt="Shopkart"/>
                                                
                                                <div className="box-content">
                                <h3 className="title">Shopkart</h3>
                                <ul className="icon">
                                                            <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img className="myImg" src="images/portfolio2.jpg" alt="Hello42 Cabs" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Hello42 Cabs</h3>
                                <ul className="icon">
                                    <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                                                <li><a href="http://www.hello42cab.com/" target="_blank"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img src="images/portfolio3.jpg" alt="priceveille" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Priceveille</h3>
                                <ul className="icon">
                                    <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                                                <li><a href="http://netveille.com/tools.php#toolsPriceveille" target="_blank"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img src="images/portfolio4.jpg" alt="Shopkart" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">Shopkart</h3>
                                <ul className="icon">
                                    <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img src="images/portfolio5.jpg" alt="SiteCompli" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">SiteCompli</h3>
                                <ul className="icon">
                                    <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                                                <li><a href="https://sitecompli.com" target="_blank"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                                <div className="col-lg-4 col-md-4 col-6 p-0">
                        <div className="box9">
                            <img src="images/portfolio6.jpg" alt="DravyaSoft" className="img-fluid" />
                            <div className="box-content">
                                <h3 className="title">DravyaSoft</h3>
                                <ul className="icon">
                                    <li><a href="#portfolio" className="prt-clk"><i className="fa fa-search"></i></a></li>
                                    <li><a href="http://dravyasoft.com/" target="_blank"><i className="fa fa-link"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
