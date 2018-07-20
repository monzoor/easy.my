import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect} from 'react-router-dom';
import { Helmet } from "react-helmet";

import Breadcrumb from './../../Common/Breadcrumb';
import Loader from './../../Common/loader';
import Slider from './Slider';

import { getAd, updateWishList } from './adAction'

class AdDetails extends Component {
    constructor (props) {
        super(props);
        this.state = {
            wishList: false,
            isLoading: true,
            phone: ""
        }

        this.onClick = this.onClickWishList.bind(this);
        this.onClick = this.onClickPhone.bind(this);
    }
    componentDidMount() {
        const uid = this.props.match.params.uid,
              slug = this.props.match.params.adSlug;
        this.props.dispatch(getAd(uid, slug));
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.ad !== this.props.ad) {
            this.setState({
                wishList: nextProps.ad[0].wishlist,
                isLoading: false,
                phone: nextProps.ad[0].sellerInfos.phone.slice(0, -3).concat('xxx'),
            })
        }
    }
    onClickWishList = (e) => {
        this.setState(prevState => ({
          wishList: !prevState.wishList
      }));
      const uid = this.props.match.params.uid;
      this.props.dispatch(updateWishList(uid, !this.state.wishList));
    }
    onClickPhone = (e) => {
        this.setState({
            phone: this.props.ad[0].sellerInfos.phone
        })
    }
    render() {
        const {wishList, isLoading, phone} = this.state;
        const hasErros = this.props.ad.hasErros;
        const ad = this.props.ad[0];

        return (isLoading) ?  ( <Loader></Loader> ) : (hasErros) ? <Redirect to={{ pathname: this.props.match.url, state: { status: 404 }}}/> :

         (
            <div className="container--center-main pa-f--m pa-f--s">
                <Helmet>
                    <title>{this.props.match.params.adSlug}</title>
                </Helmet>
                <div id="adDetails" className="container--fluid pt-m--s">

                    <Breadcrumb crumbInfos={ad.breadcrumb}></Breadcrumb>

                    <div className="row mb-s--s">
                        <div className="col--full pa-f--m pl-m--m">
                            <h1 id="adTitle" className="h4 base-text"><strong>{ad.name}</strong></h1>
                        </div>
                    </div>
                    <div className="row">

                        <Slider images={ad.productDetails.images}></Slider>

                        <div className="col--full ad-infos pt-m--m">
                            <div className="row ma-f--s mb-s--s pl-m--m">
                                <div id="wishList" className="secondary-text v-align--middle float--left cursor" onClick={this.onClickWishList}>
                                    <strong><i className={`text-m ${(wishList) ? 'icon-heart red-text' : 'icon-heart-o'}`}></i></strong>
                                    <span className="ml-s--s">Wishlist</span>
                                </div>
                                <div id="share" className="secondary-text v-align--middle float--left ml-l--s cursor">
                                    <strong><i className="icon-share text-m"></i></strong>
                                    <span className="ml-s--s">Share</span>
                                </div>
                            </div>

                            <div className="row ma-f--s">
                                <div id="adMetas" className="col--full pa-f--s">
                                    <div className="row pl-m--m">
                                        <div className="col--full">
                                            <p className="text-s secondary-text mb-f--s">Price</p>
                                            <p className="h4 red-text"><strong>RM {ad.productDetails.price}</strong></p>

                                            <p className="text-s secondary-text mb-f--s">Item condition</p>
                                            <p>{ad.productDetails.condition}</p>

                                            <p className="text-xs secondary-text mb-f--s">Item location</p>
                                            <p>{ad.productDetails.location}</p>
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
                                                <p className="mb-f--s">{ad.sellerInfos.name}</p>
                                                <p className="text-s secondary-text mb-f--s">{ad.sellerInfos.type}</p>
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
                                        <div className="btn btn--line grow mb-s--m" onClick={this.onClickPhone}><i className="icon-phone mr-xs--s"></i> <strong>{phone}</strong></div>
                                        <a href={"mailto:"+ ad.sellerInfos.email} className="btn btn--line grow mb-s--m"><i className="icon-mail mr-xs--s"></i> <strong>Email</strong></a>
                                        <div className="btn btn--fill grow"><i className="icon-chat mr-xs--s"></i> <strong>Chat</strong></div>
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



const mapStateToProps = (state, ownProps) => {
    return {
        ad: state.ad.payload
    };
};


export default withRouter(connect(mapStateToProps)(AdDetails))
