import React, { Component } from 'react'

export class BlogInfo extends Component {
    render() {
        const {title, heading, desc, date, author, bigMetaClass} = this.props;
        return (
            <React.Fragment>
                <h4><a href="single.html" title="">{heading}</a></h4>
                {desc && <p>{desc}</p>}
                <small><a href="blog-category-01.html" title="">{title}</a></small>
                <small><a href="single.html" title="">{date}</a></small>
                {author && <small><a href="blog-author.html" title="">{author}</a></small>}
            </React.Fragment>
        )
    }
}

export default BlogInfo
