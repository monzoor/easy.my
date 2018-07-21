import React, {Component} from 'react';

import loaderImage from './../../assets/images/loader.svg';

class Loader extends Component {

    render() {
        return (
            <div className="container--fluid center-align pt-xl--s">
                <img className="center-align mza" src={loaderImage} alt=""/>
            </div>
        );
    }
}


export default Loader;
