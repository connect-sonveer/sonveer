import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Header from './Header';
import Menubar from './Menubar';
import HeadSection from './HeadSection';
import MidSection from './MidSection';
import Advertisement from './Advertisement';
import LowerSection from './LowerSection';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../.././../../assets/shared/css/font-awesome.min.css';
import '../.././../../assets/blog/css/style_blog.css';
import '../.././../../assets/blog/css/responsive.css';
import '../.././../../assets/blog/css/colors.css';

export class Content extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            searchBox: false
        }
    }

    searchBoxHandler = () => {
        this.setState({
            searchBox: !this.state.searchBox
        });
    }

    render() {
        return (
            <React.Fragment>            
                <div id="wrapper">
                    {this.state.searchBox && <SearchBox/> }
                    <Header clickSearchHandler={this.searchBoxHandler}/>
                    <Menubar/>
                    <HeadSection/>
                    <section className="section">
                        <div className="container">
                            <MidSection />
                            <Advertisement />
                            <hr className="invis1">
                            </hr>
                            <LowerSection />
                            <hr className="invis1">
                            </hr>
                            <Advertisement />
                        </div>
                    </section>
                    <Footer />
                    <div className="dmtop">Scroll to Top</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Content;
