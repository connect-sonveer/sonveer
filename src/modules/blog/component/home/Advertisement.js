import React from 'react';

import banner_01 from '../../../../assets/blog/upload/banner_01.jpg';

function Advertisement() {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                <div className="banner-spot clearfix">
                    <div className="banner-img">
                        <img src={banner_01} alt="" className="img-fluid"></img>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Advertisement
