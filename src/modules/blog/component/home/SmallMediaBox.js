import React, { Component } from 'react';

export class SmallMediaBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {imgSrc, title, desc, date, author} = this.props;
        return (
            <React.Fragment>
                <div className="masonry-box small-box post-media">
                    <img src={imgSrc} alt="" className="img-fluid"></img>
                    <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                            <span className="bg-green"><a href="blog-category-01.html" title="">{title}</a></span>
                            <h4><a href="single.html" title="">{desc}</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SmallMediaBox
