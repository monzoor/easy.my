import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

import prodductImage from './../../../assets/images/demo/nintendo.jpg';
import Breadcrumb from './../../Common/Breadcrumb';
import Slider from './Slider';

// import { fetchPosts } from '../../../actions/postActions'
// import Slider from '../../Common/Slider';

class Home extends Component {
    constructor (props) {
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        // this.props.dispatch(fetchPosts())
    }
    render() {

        return (
            <div className="container--center-main pa-f--m pa-f--s">
                <div id="adDetails" className="container--fluid pt-m--s mt-xl--m">
                    <Breadcrumb></Breadcrumb>
                    <div className="row mb-s--s">
                        <div className="col--full pa-f--m">
                            <h1 id="adTitle" className="h4 base-text"><strong>Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</strong></h1>
                        </div>
                    </div>
                    <div className="row">

                        <Slider></Slider>
                        
                        <div className="col--full ad-infos pt-m--m">
                            <div className="row ma-f--s mb-s--s pl-m--m">
                                <div id="wishList" className="secondary-text v-align--middle float--left">
                                    <strong><i className="icon-heart-o text-m"></i></strong>
                                    <span className="ml-s--s">Wishlist</span>
                                </div>
                                <div id="share" className="secondary-text v-align--middle float--left ml-l--s">
                                    <strong><i className="icon-share text-m"></i></strong>
                                    <span className="ml-s--s">Share</span>
                                </div>
                            </div>

                            <div className="row ma-f--s">
                                <div id="adMetas" className="col--full pa-f--s">
                                    <div className="row pl-m--m">
                                        <div className="col--full">
                                            <p className="text-s secondary-text mb-f--s">Price</p>
                                            <p className="h4 red-text"><strong>RM 1,289</strong></p>

                                            <p className="text-s secondary-text mb-f--s">Item condition</p>
                                            <p>Brand new in the box</p>

                                            <p className="text-xs secondary-text mb-f--s">Item location</p>
                                            <p>Bangsar south, Kuala lumpur</p>
                                        </div>
                                    </div>

                                    <div className="row mb-xl--s mb-m--m pl-m--m">
                                        <div className="hr d-m--none d-l--none"></div>

                                        <div id="sellerMetas" className="col--full">
                                            <p className="text-s secondary-text">Seller info</p>

                                            <div className="avatar avatar--sm bg-border center-align float--left">
                                                <i className="icon-user white-text text-xxl"></i>
                                            </div>
                                            <div id="sellerMeta" className="float--left ml-s--s">
                                                <p className="mb-f--s">Takeshi Nakamura</p>
                                                <p className="text-s secondary-text mb-f--s">Private seller</p>
                                            </div>
                                        </div>

                                        <div className="hr mt-s--s d-m--none d-l--none"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div id="naviation" className="pt-xs--s shadow--top pa-m--m">
                                    <p className="text-s mb-f--s d--none d-m--block pl-s--m pr-s--m">Interested with the ad? Contact the seller</p>
                                    <div className="btn-group mt-s--s pl-s--m pr-s--m">
                                        <div className="btn btn--line grow mb-s--m"><i className="icon-phone mr-xs--s"></i> 01675738xxx</div>
                                        <div className="btn btn--line grow mb-s--m"><i className="icon-mail mr-xs--s"></i> Email</div>
                                        <div className="btn btn--fill grow"><i className="icon-chat mr-xs--s"></i> Chat</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    // console.log('====1====',state);
    return {
        posts: null
    };
};


export default withRouter(connect(mapStateToProps)(Home))
