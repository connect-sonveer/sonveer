import React, { Component } from 'react';
import BlogContent from './BlogContent';

export class BlogMediaBox extends Component {
    render() {
        const {imgSrc, title, heading, desc, date, author} = this.props;
        return (
            <React.Fragment>
                <div className="blog-box row">
                    <div className="col-md-4">
                        <div className="post-media">
                            <a href="single.html" title="">
                                <img src={imgSrc} alt="" className="img-fluid"></img>
                                <div className="hovereffect"></div>
                            </a>
                        </div>
                    </div>
                    <div className="blog-meta big-meta col-md-8">
                        <BlogContent heading={heading} desc={desc} title={title} date={date} author={author} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogMediaBox
