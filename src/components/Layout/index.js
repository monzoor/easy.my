import Header from './Header';
import Footer from './Footer';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class MainLayout extends Component {
    // constructor(props){
    //     super(props);
    // }
    // componentDidMount() {
    //     // this.props.dispatch(fetchPosts())
    //     // this.props.dispatch(getCategories());
    // }
    render() {
        // console.log(this.props);
        return (
            <div>
              <Header/>
              <div className="mt-xl--m">
                  {this.props.children}
              </div>
              <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        // allCategories: state.allCategories.categories
    };
};

// TODO
// MainLayout.propTypes = {
//     ...MainLayout.propTypes,
//     getCategories: PropTypes.func.isRequired,
//     // allCategories: PropTypes.object
// }



export default withRouter(connect(mapStateToProps)(MainLayout))
