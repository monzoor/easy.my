import React, {Component} from 'react';

import {Link} from 'react-router-dom';

// import {Helmet} from 'react-helmet';

import mainLogo from './../../assets/images/easymy.svg';

import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


class Header extends Component {

    render() {
        return (
            <header className="shadow--bottom pl-m--s pl-xl--m bg-white">
                <Link to="/"><img src={mainLogo} width="140" alt=""/></Link>
            </header>
        );
    }
}


export default Header;
