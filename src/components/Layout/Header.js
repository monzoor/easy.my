import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import mainLogo from './../../assets/images/easymy.svg';

class Header extends Component {

    render() {
        return (
            <header className="shadow--bottom pl-m--s pl-xl--m bg-white">
                <Link className="d--inline-block" to="/"><img src={mainLogo} width="140" alt="eazy.my"/></Link>
            </header>
        );
    }
}


export default Header;
