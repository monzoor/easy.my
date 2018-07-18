import React, {Component} from 'react';

import {Link} from 'react-router-dom';

// import {Helmet} from 'react-helmet';

import prodductImage from './../../../assets/images/demo/nintendo.jpg';

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Slider extends Component {

    render() {
        return (
            <div id="adImages" className="col--full pa-f--s mb-m--s mb-f--m ad-images mr-m--l mr-f--s">
                <ul className="border">
                    <li>
                        <img className="img-fluid" src={prodductImage} alt=""/>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Slider;
