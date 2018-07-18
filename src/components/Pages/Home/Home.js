import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

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
            <div className="container--fluid pt-m--s">
                <h1 id="adTitle" className="h4">Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</h1>
                <div id="adImages">
                    <ul>
                        <li>
                            <img src="" alt=""/>
                        </li>
                    </ul>
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
