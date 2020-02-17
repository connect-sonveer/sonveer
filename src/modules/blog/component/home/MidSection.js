import React, { Component } from 'react';
import BlogBox from './BlogBox';

import blog_01 from '../../../../assets/blog/upload/blog_01.jpg';
import blog_05 from '../../../../assets/blog/upload/blog_05.jpg';

export class MidSection extends Component {
    render() {
        const desc = "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio."; 
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="section-title">
                        <h3 className="color-aqua"><a href="blog-category-01.html" title="">Lifestyle</a></h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <BlogBox imgSrc={blog_05} heading="The golden rules you need to know for a positive life" desc={desc} title="LIFESTYLE" date="24 JULY, 2017" author="by AMANDA" bigMetaClass="big-meta"/>
                            <hr className="invis">
                            </hr>
                            <BlogBox imgSrc={blog_05} heading="I have a desert visit this summer" desc={desc} title="LIFESTYLE" date="24 JULY, 2017" author="by Martine"/>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="section-title">
                        <h3 className="color-pink"><a href="blog-category-01.html" title="">Fashion</a></h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <BlogBox imgSrc={blog_01} heading="What is your favorite leather jacket color" title="Fashion" date="21 JULY, 2017"/>
                            <hr className="invis">
                            </hr>
                            <BlogBox imgSrc={blog_01} heading="This year's fashionable long beard" title="FASHION, MAN" date="08 JULY, 2017"/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <BlogBox imgSrc={blog_01} heading="Is summer, have you bought a cane" title="FASHION" date="11 JULY, 2017" />
                            <hr className="invis">
                            </hr>
                            <BlogBox imgSrc={blog_01} heading="How to be more cool with clothing" title="FASHION, STYLE" date="04 JULY, 2017" />
                        </div>
                    </div>
                    </div>
                </div>
                <hr className="invis1"></hr>
            </React.Fragment>
        )
    }
}

export default MidSection
