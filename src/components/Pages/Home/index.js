import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
 import BackgroundImage from 'react-background-image-loader';

import { getAds } from './homeAction';

import placeholder from './../../../assets/images/loader.svg';
class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getAds())
    }
    render() {
        const ads = this.props.ads;
        return (
            <div className="container--fluid">
                <Helmet>
                    <title>eazy.my</title>
                </Helmet>
                <div className="container--center-main pt-m--s mb-l--s">
                    <h1 className="center-align">Welcome to eazy.my</h1>
                    <p className="center-align">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam itaque a facere unde, quo, cumque ipsam architecto temporibus explicabo. Debitis facilis eveniet dolorum! Asperiores quasi natus sunt dolor voluptas repellat corrupti ut, quis error assumenda, quod commodi voluptatibus aliquid ducimus.</p>
                </div>
                <div className="row">
                    <div className="col--full">
                        <div className="row ma-m--m">
                            {ads.map((ad, index) => (
                                <div key={index} className="col--one-fifth mb-s--s">
                                    <Link to={"/ads/" + ad.slug + "=" + ad.id}>
                                        <BackgroundImage className="image-wrapper mb-s--s" src={ad.productDetails.images[0]} placeholder={placeholder}></BackgroundImage>
                                        <p className="h6">
                                            <strong>{ad.name}</strong>
                                        </p>
                                        <p className="red-text"><strong>RM {ad.productDetails.price}</strong></p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}



const mapStateToProps = (state) => {
    return {
        ads: state.ads.payload
    };
};


export default withRouter(connect(mapStateToProps)(Home))
