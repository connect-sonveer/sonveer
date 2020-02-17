import React, { Component } from 'react';
import BlogContent from './BlogContent';

export class BlogBox extends Component {
    render() {
        const {imgSrc, title, heading, desc, date, author, bigMetaClass, videohover} = this.props;
        return (
            <React.Fragment>
                <div className="blog-box">
                    <div className="post-media">
                    <a href="single.html" title="">
                        <img src={imgSrc} alt="" className="img-fluid"></img>
                        <div className="hovereffect">
                            <span className={videohover && `${videohover}`}></span>
                        </div>
                    </a>
                    </div>
                    <div className={`blog-meta ${bigMetaClass}`}>
                        <BlogContent heading={heading} desc={desc} title={title} date={date} author={author} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BlogBox
