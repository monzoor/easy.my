import React, {Component} from 'react';

class Slider extends Component {

    render() {
        return (
            <div id="adImages" className="col--full pa-f--s mb-m--s mb-f--m ad-images mr-m--l mr-f--s">
                <ul className="border">
                    <li>
                        {this.props.images.map((image, i) => <img className="img-fluid" key={i} src={image} alt=""/>)}
                    </li>
                </ul>
            </div>
        );
    }
}


export default Slider;
