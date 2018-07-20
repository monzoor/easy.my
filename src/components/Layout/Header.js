import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import mainLogo from './../../assets/images/easymy.svg';

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
