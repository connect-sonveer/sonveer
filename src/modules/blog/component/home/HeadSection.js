import React, { Component } from 'react';
import MediaBox from './MediaBox';
import SmallMediaBox from './SmallMediaBox';

import masonry from '../../../../assets/blog/upload/blog_masonry_01_05.jpg';
import masonry02 from '../../../../assets/blog/upload/blog_masonry_02.jpg';
import masonry03 from '../../../../assets/blog/upload/blog_masonry_03_04.jpg';
export class HeadSection extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section first-section">
                    <div className="container-fluid">
                        <div className="masonry-blog clearfix">
                            <div className="left-side">
                                <MediaBox imgSrc={masonry} title="Lifestyle" heading="The golden rules you need to know for a positive life" date="24 July, 2019" author="Amanda" />
                            </div>
                            <div className="center-side">
                                <MediaBox imgSrc={masonry02} title="Travel" heading="5 places you should see" date="24 July, 2019" author="Amanda" />
                                <SmallMediaBox imgSrc={masonry03} title="Travel" heading="Separate your place with exotic hotels" />
                                <SmallMediaBox imgSrc={masonry03} title="Travel" heading="What you need to know for child health" />
                            </div>
                            <div className="right-side hidden-md-down">
                                <MediaBox imgSrc={masonry} title="Lifestyle" heading="The rules you need to know for a happy union" date="24 July, 2019" author="Amanda" />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default HeadSection
