import React, {Component} from 'react';

import {Link} from 'react-router-dom';

// import {Helmet} from 'react-helmet';

import mainLogo from './../../assets/images/easymy.svg';

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Breadcrumb extends Component {

    render() {
        return (
            <div className="row mb-s--s d--none d-m--none d-l--block pl-m--m">
                <ol className="breadcrumb text-xs">
                    <li className="breadcrumb-item">
                        <Link to="/" className="base-text">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/" className="base-text">Electronics</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/" className="base-text">Games & Console</Link>
                    </li>
                    <li className="breadcrumb-item active">
                        <Link to="/"  className="base-text">Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty)+Screen Protector</Link>
                    </li>
                </ol>
            </div>
        );
    }
}


export default Breadcrumb;
