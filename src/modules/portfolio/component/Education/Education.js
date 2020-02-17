import React from 'react'

const Education = () => {
    return (
        <section className="client py-5" id="education">
            <div className="container py-lg-5">
                    <p className="paragraph">about my education</p>
                    <h3 className="heading mb-sm-5 mb-4">Education</h3>
                    <div className="row client-slider-slide">
                        <div className="col-lg-4 col-md-4 w3layouts-txt-says mb-md-0 mb-5">
                        <div className="clients-info-grid">
                            
                            <div className="row">
                                <div className="col-lg-2 col-3 pr-0 img-position mt-3">
                                <img src={require("../../../../assets/portfolio/images/uptu.jpg")} alt="" className="img-fluid" />
                                </div >
                                <div className=" col-lg-10 col-9 clients-txt-info">
                                <h4 className="mt-4">B.Tech(IT)</h4>
                                <p><b>Meerut Institue of Technology, Meerut</b></p>
                                                    <i>(Uttar Pradesh Technical University)<br />
                                                    2010-2014</i>
                                </div>
                            </div>
                        </div>
                        </div>
                                <div className="col-lg-4 col-md-4 w3layouts-txt-says mb-md-0 mb-5">
                        <div className="clients-info-grid">
                            
                            <div className="row">
                                <div className="col-lg-2 col-3 pr-0 img-position mt-3">
                                <img src={require("../../../../assets/portfolio/images/cbse.jpg")} alt="" className="img-fluid" />
                                </div >
                                <div className=" col-lg-10 col-9 clients-txt-info">
                                <h4 className="mt-4">Intermediate</h4>
                                <p><strong>Darshan Academy, Meerut</strong></p>
                                                    <i>(CBSE)<br />2008-2009</i>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 col-md-4 w3layouts-txt-says">
                        <div className="clients-info-grid">
                            
                            <div className="row">
                                <div className="col-lg-2 col-3 pr-0 img-position mt-3">
                                <img src={require("../../../../assets/portfolio/images/cbse.jpg")} alt="" className="img-fluid" />
                                </div >
                                <div className=" col-lg-10 col-9 clients-txt-info">
                                <h4 className="mt-4">High School</h4>
                                <p><strong>Darshan Academy, Meerut</strong></p>
                                                    <i>(CBSE)<br />2006-2007</i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Education
