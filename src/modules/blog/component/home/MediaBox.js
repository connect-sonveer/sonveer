import React, { Component } from 'react';

export class MediaBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {imgSrc, title, heading, date, author} = this.props;
        return (
            <React.Fragment>
                <div className="masonry-box post-media">
                    <img src={imgSrc} alt="" className="img-fluid"></img>
                    <div className="shadoweffect">
                        <div className="shadow-desc">
                            <div className="blog-meta">
                                <span className="bg-aqua"><a href="blog-category-01.html" title="">{title}</a></span>
                                <h4><a href="single.html" title="">{heading}</a></h4>
                                <small><a href="single.html" title="">{date}</a></small>
                                <small><a href="blog-author.html" title="">by {author}</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MediaBox
