import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>

                <div className="content mt-xl--m">
                    {this.props.children}
                </div>

                <Footer/>
            </div>
        );
    }
}

export default MainLayout;
