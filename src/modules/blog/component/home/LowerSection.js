import React, { Component } from 'react';
import BlogMediaBox from './BlogMediaBox';
import BlogBox from './BlogBox';

import menu from '../../../../assets/blog/upload/menu.jpg';
import blog_square from '../../../../assets/blog/upload/blog_square.jpg';

export class LowerSection extends Component {
    render() {
        const desc = "Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio."; 
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-9">
                    <div className="blog-list clearfix">
                        <div className="section-title">
                            <h3 className="color-green"><a href="blog-category-01.html" title="">Travel</a></h3>
                        </div>
                        <BlogMediaBox imgSrc={blog_square} heading="The golden rules you need to know for a positive life" desc={desc} title="LIFESTYLE" date="24 JULY, 2017" author="by AMANDA" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                        <BlogMediaBox imgSrc={blog_square} heading="Let's make an introduction to the glorious world of history" desc={desc} title="TRAVEL" date="22 JULY, 2017" author="by Samanta" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                        <BlogMediaBox imgSrc={blog_square} heading="Did you see the most beautiful sea in the world?" desc={desc} title="FOOD" date="20 JULY, 2017" author="by Jackie" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                    </div>
                    <hr className="invis">
                    </hr>
                    <div className="blog-list clearfix">
                        <div className="section-title">
                            <h3 className="color-red"><a href="blog-category-01.html" title="">Food</a></h3>
                        </div>
                        <BlogMediaBox imgSrc={blog_square} heading="Banana-chip chocolate cake recipe" desc={desc} title="LIFESTYLE" date="15 JULY, 2017" author="by Matilda" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                        <BlogMediaBox imgSrc={blog_square} heading="10 practical ways to choose organic vegetables" desc={desc} title="FOOD" date="15 JULY, 2017" author="by Matilda" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                        <BlogMediaBox imgSrc={blog_square} heading="We are making homemade ravioli" desc={desc} title="TRAVEL" date="05 JULY, 2017" author="by Samanta" bigMetaClass="big-meta" />
                        <hr className="invis">
                        </hr>
                    </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="section-title">
                            <h3 className="color-yellow"><a href="blog-category-01.html" title="">Vlogs</a></h3>
                        </div>
                        <BlogBox imgSrc={menu} heading="We are guests of ABC Design Studio - Vlog" title="Videos" date="21 July, 2017"/>
                        <hr className="invis">
                        </hr>
                        <BlogBox imgSrc={menu} heading="Nostalgia at work" title="Videos" date="20 July, 2017"/>
                        <hr className="invis">
                        </hr>
                        <BlogBox imgSrc={menu} heading="How to become a good vlogger" title="Beauty" date="20 July, 2017"/>
                        <hr className="invis">
                        </hr>
                        <div className="section-title">
                            <h3 className="color-grey"><a href="blog-category-01.html" title="">Health</a></h3>
                        </div>
                        <BlogBox imgSrc={menu} heading="Opened the doors of the Istanbul spa center" title="Spa" date="21 July, 2017" />
                        <hr className="invis">
                        </hr>
                        <BlogBox imgSrc={menu} heading="2017 trends in health tourism" title="Health" date="10 July, 2017" />
                        <hr className="invis">
                        </hr>
                        <BlogBox imgSrc={menu} heading="Experience the effects of miraculous stones" title="Beauty" date="20 July, 2017" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LowerSection
